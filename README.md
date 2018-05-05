# TagMag
Show Tag on Images in Html

Installing

Add JQuery,TagMag Styles, and TagMag Script in html

```html
<script src="jquery-1.10.2.min.js"></script>
<link href="../src/TagMag.min.css" rel="stylesheet" />
<script src="../src/TagMag.min.js"></script>
```

then put your image in html with `id`

```html
<img id="photo" src="ball2.jpg" />
```

on window load call TagMag with image id, points, and title

```html
<script>
window.onload = function () {
  var msg = "Ball";
  var points = {
    x: 258,
    y: 15,
    w: 326,
    h: 319
  };
  TagMag("photo", points, msg);
};
</script>
```
output will be something like this on mouse over :

<img src='samples/sample1.jpg' />
