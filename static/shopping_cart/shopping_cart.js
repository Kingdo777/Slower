$(document).ready(function () {

    // 页脚导航的图片
    $("footer .nav .shopping-cart img").attr("src", "/static/image/icons/cart_fill.png");
    $("footer .nav .shopping-cart a").css({"color": "#e0620d"});

    //
    SLOWER.cart.render_cart();
    SLOWER.cart.render_recommend();

    // 下订单
    $('.to-clearing').click(function () {
        SLOWER.cart.order();
    });

    // 全选
    $('.select-all').click(function () {
        SLOWER.cart.selected_all();
    });
});


if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.cart = (function () {
    let orders = {};
    let total_price = 0;
    let selected_all = true;

    function __update_total_prices__() {

        selected_all = true;
        total_price = 0;

        orders.forEach(function (item) {
            if(item.selected) {
                total_price += parseFloat(item.price) * item.number;
            }
            else {
                selected_all = false;
            }
        });

        $('#total_price').text('￥' + total_price);
        if(selected_all){
            $('.clearing .selected-all').show();
            $('.clearing .non-selected-all').hide();
        }
        else {
            $('.clearing .selected-all').hide();
            $('.clearing .non-selected-all').show();
        }
    }

    return {
        selected_all:function () {
            selected_all = !selected_all;

            if(selected_all){
                orders.forEach(function (item) {
                    item.select = true;
                });
            }
            else {
                orders.forEach(function (item) {
                    item.select = false;
                });
            }
        },

        /**
         * 渲染购物车中商品
         */
        render_cart:function () {
            $.post('/shopping_cart/all', null, function (data) {

                // console.log(data);

                if(data.status === "success") {
                    orders = data.books;

                    if(orders.length > 0){
                        $('.cart-empty').hide();
                        $('.clearing').show();
                    }
                    else {
                        $('.cart-empty').show();
                        $('.clearing').hide();
                    }

                    orders.forEach(function (item) {

                        item.price = /(\d+.\d+)/g.exec(item.price)[0];

                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            price: item.price,
                            number: item.number,
                        };

                        let $temp = $('#order-template').tmpl(data);
                        $temp.appendTo('.orders');

                        // VM
                        Object.defineProperty(item, 'select', {
                            set: function (val) {

                                if(this.selected !== !!val) {
                                    if(val) {
                                        $.post('/shopping_cart/selected', {bookId: this.id}, function (data) {
                                            if(data.status !== "success")
                                                console.log('failed');
                                        });
                                    }
                                    else {
                                        $.post('/shopping_cart/non_selected', {bookId: this.id}, function (data) {
                                            if(data.status !== "success")
                                                console.log('failed');
                                        });
                                    }
                                }

                                this.selected = !!val;

                                // 选中按钮状态
                                if(!this.selected) {
                                    $temp.find('.selected').hide();
                                    $temp.find('.non-selected').show();
                                }
                                else {
                                    $temp.find('.selected').show();
                                    $temp.find('.non-selected').hide();
                                }

                                __update_total_prices__();
                            },
                            get:function () {
                                return this.selected;
                            }
                        });


                        item.select = !!item.selected;


                        // 注册选择取消按钮
                        $temp.find('.select').click(function () {
                            item.select = !item.selected;
                        });

                        // 注册 增加减少
                        $temp.find('.sub').click(function () {

                            if(item.number > 1) {

                                $.post('/shopping_cart/decrease', {bookId: item.id}, function (data) {
                                    if(data.status === "success") {
                                        item.number -= 1;
                                        $temp.find('.amount').text(item.number);
                                        __update_total_prices__();
                                    }
                                });
                            }
                        });

                        $temp.find('.add').click(function () {

                            $.post('/shopping_cart/increase', {bookId: item.id}, function (data) {
                                if(data.status === "success") {
                                    item.number += 1;
                                    $temp.find('.amount').text(item.number);
                                    __update_total_prices__();
                                }
                            });
                        });
                    })
                }
            });
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
        },

        order: function () {
            location.href = "/shopping_cart/order";
        }
    }
})();