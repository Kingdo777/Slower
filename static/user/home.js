$(document).ready(function () {
    // 更改导航栏菜单
    $("footer .nav .user-home img").attr("src", "/static/image/icons/my_fill.png");
    $("footer .nav .user-home a").css({"color": "#e0620d"});

    //
    SLOWER.user_home.render_recommend();
});


if(typeof SLOWER === "undefined") SLOWER = {};

SLOWER.user_home = (function () {

    return {
        /**
         * 渲染推荐商品
         */
        render_recommend:function () {
            $.post('/book/free', {page: 0, size: 50 }, function (data) {
                console.log(data);

                if(data.status === "success") {
                    data.books.forEach(function (item) {
                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            price: item.price,
                        };

                        $('#recommend-template').tmpl(data).appendTo('.recommend .list');
                    })
                }
            })
        }
    }
})();