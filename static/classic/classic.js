$(document).ready(function () {
    // 导航图标
    $("footer .nav .classic img").attr("src", "/static/image/icons/classic_fill.png");
    $("footer .nav .classic a").css({"color": "#e0620d"});
    $(".select").css({"color": "#e0620d"});
    $(".categoryHead").on("click",function () {
        $(".categoryHead").css("color","#cccccc");
        $(this).css("color","#e0620d");
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top-95
        }, 500);
    });

    // 搜索
    $('#search').focus(function () {
        location.href = "/search#!/scope=all";
    });
});


if(typeof SLOWER === "undefined") SLOWER = {};

SLOWER.classic = (function () {

    return {

    }
})();