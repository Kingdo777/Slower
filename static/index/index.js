$(document).ready(function () {
    $('#banner').slider();

    // 搜索框背景渐变
    $(window).scroll(function () {
        $('.search-section').css({"background-color":"rgba(224, 98, 13, " + $(this).scrollTop()/50 + ")"});
    });

    // 更改导航栏菜单
    $("footer .nav .home img").attr("src", "/static/image/icons/home_fill.png");
    $("footer .nav .home a").css({"color": "#e0620d"});

    // 渲染数据
    SLOWER.index.render();

    //扫一扫按钮
    $(".scan-icon").on("click",function () {
        scanQRCode(newBook);
    });

    // 查找图书
    $('#search').focus(function () {
        window.location.href = "/search#!/scope=all";
    })
});

function newBook(ISBN)
{
    $.post("/book/newBook/"+ISBN, null, function (data) {
        location.href = "/book/details/"+data;
    } );
}

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
                            summary: item.summary.substr(0, 50) + '...',
                            author: item.author
                        };

                        $('#book-template').tmpl(data).appendTo("#book-list");
                    })
                }
            });

        }
    }
})();