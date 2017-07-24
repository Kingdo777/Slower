$(document).ready(function () {
    // 更改导航栏菜单
    $("footer .nav .bookrack img").attr("src", "/static/image/icons/bookrack_fill.png");
    $("footer .nav .bookrack a").css({"color": "#e0620d"});

    // 渲染书架列表
    SLOWER.bookrack.render();

    // 搜索
    $('#search').focus(function () {
        location.href = "/search#!/scope=br";
    })
});


if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.bookrack = (function () {

    return {
        render:function () {

            /**
             * 获取当前用户的书架上的所有图书
             */
            $.post("/bookrack/all", null, function (data) {

                if(data.status === "success") {
                    data.books.forEach(function (item, index, array){
                        let data = {
                            cover: item.cover,
                            title: item.title,
                            percent: item.percent
                        };

                        $("#bookrack-item-template").tmpl(data).appendTo("#bookrack");
                    });
                }
            });
        }
    }
})();