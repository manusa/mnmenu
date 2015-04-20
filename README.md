#[mnmenu](http://www.marcnuri.com/)


##Description

[JQuery](http://jquery.com/) plugin to create dropdown menus from ``<ul>`` lists.

This is a very simple and straightforward plugin. It's still a work in progress project
with more features to come, so check for updates to see what's new in upcoming versions.

The aim of the project is to create a very simple to style dropdown menu. You can create
a totally styled menu in less than 100 line stylesheet.

##Demo

You can try a working demo of the project at:
**[www.marcnuri.com](http://www.marcnuri.com/content/mnmenu-dropdown-jquery-menu)**

Or browsing the example.html in the examples directory. Either by downloading the file or by visiting:
- [example.html](https://rawgithub.com/manusa/mnmenu/master/example/example.html) This example shows
a couple of menus with different styles.
- [exampleFontAwesome.html](https://rawgithub.com/manusa/mnmenu/master/example/exampleFontAwesome.html) This example
shows a menu that when collapsed shows a [FontAwesome](http://fortawesome.github.io/Font-Awesome/) icon.

###Sites using mnMenu

If your site is using this plugin you can contact me to include it in the list.

- [marcnuri.com](http://www.marcnuri.com) Author's site, uses the menu in several parts of the site.
- [Tradival](http://www.tradival.com) Spanish transportation agency. Uses responsive menu with fontawesome.


##Features

- Nested list menu. The menu can have several nested hierarchy levels.
- Menu calculates window bounds so that it's always in the client view area.
- Menu can be oriented so that it displays left-to-right, right-to-left, bottom-to-top....
- Animations for display transitions. Menu is shown and hidden with animations.
- [HoverIntent](http://cherne.net/brian/resources/jquery.hoverIntent.html) compatible.
- [Responsive](http://en.wikipedia.org/wiki/Responsive_web_design). Menu will collapse in devices
  where the full first level is not visible.

##Support

You can ask for support or send your feedback messages to our mailing list hosted 
in Google Groups (there's no need to register):

https://groups.google.com/forum/#!forum/mnmenu

##Requirements

- This is a [JQuery](http://jquery.com/) plugin, so obviously it requires the jquery library.
- That's it.

##Usage

###Html

Add JQuery and mnmenu scripts to the `<head>` section.
 ```html
<script src="../lib/jqmin.1.10.1.js" type="text/javascript"></script>
<script src="../src/jquery.mnmenu.js" type="text/javascript"></script>
```

The menu should be initialized in an ``<ul>`` element.

Initialize the menu for your list:
 ```html
<script>$(document).ready(function() {
$('#idmenu').mnmenu();
})</script>
```

The structure of the ``<ul>`` element must be as follows:
 ```html
<ul>
    <li>First Level
        <ul>
            <li>Second Level</li>
            <li>...</li>
        </ul>
    </li>
    <li><a href="#">First level as link</a></li>
</ul>
```

###CSS

See the example styleIE.css for customization options.

###Options

- Responsive options:
  - **responsiveMenuEnabled** Enable/disable responsive feature. Enabled by default, set this option
     to false to disable. ```responsiveMenuEnabled: true``` 
  - **resposniveMenuButtonLabel** Text shown in the button showed when menu is collapsed 
    ```resposniveMenuButtonLabel: "Menu"``` 
