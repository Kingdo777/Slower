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
                    else {
                        $('.cart-empty').show();
                        $('.clearing').hide();
                    }

                    data.books.forEach(function (item) {
                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            price: item.price,
                            number: item.number
                        };

                        let $temp = $('#order-template').tmpl(data);

                        if(item.selected === 0){
                            $temp.find('.selected').hide();
                            $temp.find('.non-selected').show();
                        }

                        // 注册选择取消按钮
                        $temp.find('.select').click(function () {

                            if(item.selected === 0){

                                $.post('/shopping_cart/selected', {bookId: item.id}, function (data) {
                                    if(data.status === "success"){
                                        item.selected = 1;
                                        $temp.find('.selected').show();
                                        $temp.find('.non-selected').hide();
                                    }
                                });
                            }
                            else {
                                $.post('/shopping_cart/non_selected', {bookId: item.id}, function (data) {
                                    if(data.status === "success"){
                                        item.selected = 0;
                                        $temp.find('.selected').hide();
                                        $temp.find('.non-selected').show();
                                    }
                                });
                            }
                        });

                        // 注册 增加减少
                        $temp.find('.sub').click(function () {

                            if(item.number > 1){

                                $.post('/shopping_cart/decrease', {bookId: item.id}, function (data) {
                                    if(data.status === "success") {
                                        item.number -= 1;
                                        $temp.find('.amount').text(item.number);
                                    }
                                });
                            }
                        });

                        $temp.find('.add').click(function () {

                            $.post('/shopping_cart/increase', {bookId: item.id}, function (data) {
                                if(data.status === "success") {
                                    item.number += 1;
                                    $temp.find('.amount').text(item.number);
                                }
                            });
                        });

                        $temp.appendTo('.orders');
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