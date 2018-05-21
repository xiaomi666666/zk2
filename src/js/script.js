$(".dot").on("mousedown", function() {
    var startX = e.pageX - $(".dot").offset().left;
    var startY = e.pageY - $(".dot").offset().top;

    $(".dot").on("mousemove", function() {
        var l = e.pageX - startX;
        var t = e.startY - startY;
        $(".dot").css({
            left: l,
            top: t
        });
        $(".red-line").css({
            "width": l,
            "background": "crimson"
        });
        $(".dot").on("mouseup", function() {
            $(".dot").off("mousemove");
        });
    });
});