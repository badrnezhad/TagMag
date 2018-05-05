function TagMag(imageId, points, title) {

    var img = document.getElementById(imageId);
    if (!img) return;
    var canv = "<canvas id='myCanvas_" + img.id + "' width='{{width}}' height='{{height}}'></canvas>";
    if (title != null && title != "" && title != "null") {
        canv += "<span id='myText_" + img.id + "' class='canvas-balloon'>" + title + "</span>";
    }
    var imgWidth = img.offsetWidth;
    var imgHeight = img.offsetHeight;
    var imgLeft = img.offsetLeft;
    var imgTop = img.offsetTop;

    canv = canv.replace("{{width}}", imgWidth);
    canv = canv.replace("{{height}}", imgHeight);

    $(img).parent().append(canv);


    var c = document.getElementById("myCanvas_" + img.id);
    $(c).css({
        'position': 'absolute',
        'left': imgLeft,
        'top': imgTop,
        'display': 'none'
    });
    var ctx = c.getContext("2d");

    ctx.rect(points.x, points.y, points.w, points.h);
    ctx.stroke();

    debugger;
    var sp = document.getElementById("myText_" + img.id);

    var spTop = imgTop + points.y + points.h;
    if (spTop + sp.offsetHeight > imgTop + imgHeight) {
        spTop = imgTop + points.h
    }
    $(sp).css({
        'position': 'absolute',
        'left': imgLeft + points.x,
        'top': spTop,
        'display': 'none',
        'width': points.w
    });

    $(img).mouseenter(function () {
        $(c).fadeIn('fast');
        $(sp).fadeIn('slow');
    });
    $(c).mouseleave(function () {
        $(c).fadeOut('slow');
        $(sp).fadeOut('fast');
    })

}