$(function(){
    var $next = $(".next");
    var $prev = $(".prev");

    var $index = 0;
    var $ul = $(".course-info ul");
    $(".course-info ul li").clone(true).appendTo($ul);
    var $len = $(".course-info ul li").length;
    $next.click(function () {
        if ($ul.is(":animated")){}
        else {
            $index++;
            $ul.animate({"margin-left": -448 * $index + "px"}, 500, function () {
                if ($index >= $len / 2) {
                    $index = 0;
                    $(this).css({"margin-left": -448 * $index + "px"})
                }
            })
        }
    });
    $prev.click(function () {
        if ($ul.is(":animated")) { }
        else {
            if ($index <= 0) {
                $index = $len / 2;
                $ul.css({"margin-left": -448 * $index + "px"})
            }
            $index--;
            $ul.animate({"margin-left": -448 * $index + "px"}, 500)
        }
    });
})
