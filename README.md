#[mnmenu](http://www.marcnuri.com/)


##Description

[JQuery](http://jquery.com/) plugin to create dropdown menus from ul lists.

This is a very simple and straightforward plugin. It's still a work in progress project
with more features to come, so check for updates to see what's new in upcoming versions.

The aim of the project is to create a very simple to style dropdown menu. You can create
a totally styled menu in less than 100 line css sheet

##Demo

You can try a working demo of the project at:
**[www.marcnuri.com](http://www.marcnuri.com)**

##Requirements

This is a [JQuery](http://jquery.com/) plugin, so obviously it requires the jquery library.

##Usage

###Html

Add JQuery and mnmenu scripts to the `<head>` section.
 ```html
<script src="../lib/jqmin.1.10.1.js" type="text/javascript"></script>
<script src="../src/jquery.mnmenu.js" type="text/javascript"></script>
```

The menu should be initialized in an ``<ul>`` element

Initialize the menu for your list:
 ```html
<script>$(document).ready(function() {
$('#idmenu').mnmenu();
})</script>
```

###CSS

See the example styleIE.css for customization options.