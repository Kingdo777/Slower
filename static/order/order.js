$(document).ready(function () {
    SLOWER.order.render_orders();

    $('#back').click(function () {
        location.href = "/shopping_cart";
    });

    $('#pay').click(function () {
        if(parseInt($(this).attr("content"))!==-1){
            SLOWER.order.pay(parseInt($(this).attr("content")));
        }else {
            alert("地址获取失败")
        }
    });
    $("#setAddress").on("click",function () {
        alert("请先设置收获地址")
    });
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.order =(function () {

    let orders = {};


    function __get_total_prices__() {

        let total_price = 0;

        orders.forEach(function (item) {
            if(!!item.selected){
                total_price += parseFloat(item.price) * item.number;
            }
        });

        return total_price;
    }

    return {

        render_orders: function () {
            $.post('/shopping_cart/all', null, function (data) {

                console.log(data);

                if (data.status === "success") {
                    orders = data.books;

                    orders.forEach(function (item) {
                        if(item.selected)
                            $('#book-template').tmpl({cover:item.cover}).appendTo('#books');
                    });

                    $('#price').text('￥' + __get_total_prices__());
                    $('#all-price').text('￥' + __get_total_prices__());
                }
            });
        },

        pay: function (addressId) {
            location.href = "/shopping_cart/order/ensure?price=" + __get_total_prices__().toString()+"&addressId="+addressId.toString();
        }
    }
})();