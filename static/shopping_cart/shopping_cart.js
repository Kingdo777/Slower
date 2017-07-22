$(document).ready(function () {

    // 页脚导航的图片
    $("footer .nav .shopping-cart img").attr("src", "/static/image/icons/cart_fill.png");
    $("footer .nav .shopping-cart a").css({"color": "#e0620d"});

    //
    SLOWER.cart.render_cart();
    SLOWER.cart.render_recommend();
});


if(typeof SLOWER === "undefined") SLOWER = {};

SLOWER.cart = (function () {

    return {
        /**
         * 渲染购物车中商品
         */
        render_cart:function () {
            $.post('/shopping_cart/all', null, function (data) {

                console.log(data);

                if(data.status === "success")             {

                    if(data.books.length > 0){
                        $('.cart-empty').hide();
                        $('.clearing').show();
                    }

                    data.books.forEach(function (item) {
                        let data = {
                            cover: item.cover,
                            title: item.title,
                            price: item.price,
                            number: 0
                        };

                        $('#order-template').tmpl(data).appendTo('.orders');
                    })
                }
            })
        },

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