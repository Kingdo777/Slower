$(document).ready(function () {
    // 更改导航栏菜单
    $("footer .nav .user-home img").attr("src", "/static/image/icons/my_fill.png");
    $("footer .nav .user-home a").css({"color": "#e0620d"});
});


if(typeof SLOWER === "undefined") SLOWER = {};

SLOWER.user_home = (function () {

    return {

    }
})();