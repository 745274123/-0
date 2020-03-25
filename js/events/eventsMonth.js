$(function(){
    $(".twenty-one").hover(function(){
        $(this).css("color","#7b6cd4");
        $(".day-information").css("z-index",1)
    },function () {
        $(this).css("color","#707273");
        $(".day-information").css("z-index",-1)
    })
})