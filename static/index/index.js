$(document).ready(function () {
    // 更改导航栏菜单
    $("footer .nav .home img").attr("src", "/static/image/icons/home_fill.png");
    $("footer .nav .home a").css({"color": "#e0620d"});
});


if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.index = (function () {

    let books = {};

    return {

    }
})();