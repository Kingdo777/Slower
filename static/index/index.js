$(document).ready(function () {
    // 更改导航栏菜单
    $("footer .nav .home img").attr("src", "/static/image/icons/home_fill.png");
    $("footer .nav .home a").css({"color": "#e0620d"});

    // 渲染数据
    SLOWER.index.render();
});


if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.index = (function () {

    let books = {};

    return {

        /**
         * 渲染图书
         */
        render: function () {

            $.post("/book/free", { page: 0, size: 25 }, function (data) {

                if(data.status === "success"){
                    data.books.forEach(function (item) {
                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            summary: item.summary.substr(0, 50),
                            author: item.author
                        };

                        $('#book-template').tmpl(data).appendTo("#book-list");
                    })
                }
            });

        }
    }
})();