# jQuery Unorphan
#### Obliterate text orphans.

`$.unorphan()` adjoins the last two words of any block of text to make sure 
that they will wrap together.

See [Wikipedia](http://en.wikipedia.org/wiki/Widows_and_orphans) for a 
description of text orphans.

### Common usage

``` javascript
$(function() {
  $("p, li, h2, h3, h4, h5, h6").unorphan();
});
```

This changes:

``` html
<p>Apples, bananas and oranges.</p>
```

Into:

``` html
<p>Apples, bananas and&nbsp;oranges.</p>
```

### Acknowledgements

Original idea and implementation by [Shawn 
Inman](http://www.shauninman.com/archive/2007/01/03/widont_2_1_wordpress_plugin).

