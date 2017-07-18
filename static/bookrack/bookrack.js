$(document).ready(function () {
    // 更改导航栏菜单
    $("footer .nav .bookrack img").attr("src", "/static/image/icons/bookrack_fill.png");
    $("footer .nav .bookrack a").css({"color": "#e0620d"});

    // 渲染书架列表
    SLOWER.bookrack.render();
});


if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.bookrack = (function () {

    return {
        render:function () {
            $.post("/bookrack/all", null, function (data) {

                if(data.status === "success") {
                    data.books.forEach(function (item, index, array){

                    });
                }
            });
        }
    }
})();