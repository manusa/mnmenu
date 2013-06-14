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
[https://rawgithub.com/manusa/mnmenu/master/example/example.html](https://rawgithub.com/manusa/mnmenu/master/example/example.html)

##Features

- Nested list menu. The menu can have several nested hierarchy levels.
- Menu calculates window bounds so that it's always in the client view area.
- Animations for display transitions. Menu is shown an hidden with animations.

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