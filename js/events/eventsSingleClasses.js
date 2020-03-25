$(function() {
    var $next = $(".next")
    var $prev = $(".prev")
    var $index = 0;
    var $ul = $(".slide-information ul")
    $(".slide-information ul li").clone(true).appendTo($ul);//克隆一份
    var $len = $(".slide-information ul li").length;
//点击下一张按钮
    $next.click(function () {
        if ($ul.is(":animated")) {
        }//如果在动画内，即鼠标操作时，则不做任何动作
        else {
            $index++;
            $ul.animate({"margin-left": -450 * $index + "px"}, 500, function () {
                if ($index >= $len / 2) {
                    $index = 0;
                    $(this).css({"margin-left": -450 * $index + "px"})
                }
            })
        }
    });
//点击上一张按钮
    $prev.click(function () {
        if ($ul.is(":animated")) {
        } //鼠标停止点击时，动画也停止
        else {      //否则
            if ($index <= 0) {//如果是第一张
                $index = $len / 2;//让下标等于这个（即克隆的第一个）
                $ul.css({"margin-left": -450 * $index + "px"})
            }
            $index--;
            $ul.animate({"margin-left": -450 * $index + "px"}, 500)
        }
    })
})


