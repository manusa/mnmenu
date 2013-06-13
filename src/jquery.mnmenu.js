/**
 * MNMenu
 * Drop down menu
 *
 * Copyright (c) 2013 Marc Nuri
 * Version: 0.0.11
 * Modified: 2013-06-06
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://www.marcnuri.com
 */
(function($) {
    $.fn.mnmenu = function(op) {
        var settings = $.extend({}, $.fn.mnmenu.defaults, op);
        return this.each(function() {
            var $parentMenu = $(this);
            if ($parentMenu.prop("tagName").toUpperCase() !== "UL") {
                $.error("This function can only be called in <ul> elements.");
            }
            $parentMenu.addClass(settings.menuClassName);
            //Recursion through elements to set default class names and parameters
            $.fn.mnmenu.levelRecursion(settings, $parentMenu, 0);
            //Hide every other submenu (It should be prehidden by css
            $parentMenu.find("ul").each(function() {
                $(this).css("display", "none");
            });
            //Add effects to every LI
            $parentMenu.find("li").each(function() {
                $(this).mouseenter(function() {
                    $.fn.mnmenu.mouseEnter($(this), settings);
                });
                $(this).mouseleave(function() {
                    $.fn.mnmenu.mouseLeave($(this), settings);
                });
            });
        });
    };

    /**
     * Function called when mouse hovers a menu entry (&lt;li&gt;)
     * @param {jQuery} menu
     * @param {type} settings
     * @returns {undefined}
     */
    $.fn.mnmenu.mouseEnter = function(menu, settings) {
        var windowWidth = $(window).width();
        clearTimeout(menu.data('timer'));
        //Add hover class
        $.fn.mnmenu.elementsToHover(menu, settings).each(function() {
            $(this).addClass(settings.hoverClassName);
        });
        menu.children("ul").each(function() {
            var $this = $(this);
            var $parent = $this.parent("li");
            var $parentContainer = $parent.closest("ul");
            //Stop previous (hiding) animation and display the object
            //Calculations had already been made
            if ($this.is(":animated")) {
                $this.stop(true, true).show();
            }
            //Was hidden
            else {
                //Set Z-Index
                var zindex = 1;
                var current = $parent;
                while (current.get(0) !== $(document).get(0)) {
                    var temp = parseInt(current.css("z-index"));
                    if (!isNaN(temp) && temp > zindex) {
                        zindex = temp;
                    }
                    current = current.parent();
                }
                $this.css("z-index", zindex + 1);
                //Position forNon-level-0 elements
                if (!$parent.hasClass(
                        [settings.levelClassPrefix, "-0"].join(""))) {
                    //Horizontal position
                    var initialOffset = $parentContainer.offset().left +
                            $parentContainer.outerWidth();
                    if (windowWidth < (initialOffset + $this.outerWidth())) {
                        $this.css("left", "auto");
                        $this.css("right", (
                                //Container
                                        ($parentContainer.outerWidth())
                                        //Padding
                                        + ($this.outerWidth() - $this.innerWidth())
                                        ) + "px");
                    } else {
                        $this.css("left", $parentContainer.outerWidth() + "px");
                        $this.css("right", "auto");
                    }
                    //Vertical position
                    if ($parent.css("position") === "relative") {
                        $this.css("top", "0px");
                    } else {
                        $this.css("top", $parent.position().top + "px");
                    }
                }
                //level-0 elements
                else {
                    $this.css("left", "0px");
                    $this.css("top", $this.closest("li").outerHeight() + "px");
                }
                $this.slideDown(settings.duration);
            }
        });
    };

    /**
     * Function called when mouse leaves a menu entry (&lt;li&gt;)
     * @param {jQuery} menu
     * @param {type} settings
     * @returns {undefined}
     */
    $.fn.mnmenu.mouseLeave = function(menu, settings) {
        clearTimeout(menu.data('timer'));
        //Remove hover class
        $.fn.mnmenu.elementsToHover(menu, settings).each(function() {
            $(this).removeClass(settings.hoverClassName);
        });
        menu.children("ul").each(function() {
            var $toHide = $(this);
            menu.data('timer', setTimeout(
                    function() {
                        $toHide.hide(settings.duration);
                    }, settings.delay));
        });
    };



    /**
     * Returns an array of elements to which to add/remove the "hover" 
     * class when hovered
     * @param {jQuery} menu
     * @param {type} settings
     * @returns {jQuery}
     */
    $.fn.mnmenu.elementsToHover = function(menu, settings) {
        return $([menu, menu.children(":not(ul)")]);
    };

    /**
     * Recursive function to traverse the component and add a level-n class
     *  to its &lt;li&gt; children and an arrow
     * @param {type} settings
     * @param {jQuery} component
     * @param {int} level
     * @returns {undefined}
     */
    $.fn.mnmenu.levelRecursion = function(settings, $component, level) {
        if ($component.prop("tagName").toUpperCase() === "LI") {
            var middle = true;
            if ($component.parent().children().first().get(0) === $component.get(0)) {
                //Add Arrow to parent (just once).
                $component.parent().closest("li").append(
                        $(["<span ", "class='", settings.arrowClassName, "'></span>"].join("")
                        ).append(settings.arrowCharacter));
                //Add FirstClassName to first <li>
                $component.addClass(settings.firstClassName);
                middle = false;
            } 
            //component can be first and last (no else if)
            if ($component.parent().children().last().get(0) === $component.get(0)) {
                $component.addClass(settings.lastClassName);
                middle = false;
            } 
            if(middle){
                $component.addClass(settings.middleClassName);
            }
            level++;
        }
        //The component may not have 'li' direct descendants a span or something else may be in the way
        $component.children().each(function() {
            var $currentLevel = $(this);
            $currentLevel.addClass(settings.levelClassPrefix + "-" + level);
            $.fn.mnmenu.levelRecursion(settings, $currentLevel, level);
        });
    };

    /**
     * Default plugin options
     */
    $.fn.mnmenu.defaults = {
        //Class for top-level menuName
        menuClassName: "mnmenu",
        //Class for hovered elements
        hoverClassName: "hover",
        //List elements levels
        levelClassPrefix: "level",
        //Class for arrow <span>
        arrowClassName: "arrow",
        arrowCharacter: " &#187;",
        //List elements position in level
        firstClassName: "first",
        middleClassName: "middle",
        lastClassName: "last",
        delay: 150,
        duration: 250
    };
})(jQuery);