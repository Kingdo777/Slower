$(document).ready(function () {
    $('#back').click(function () {
        location.href = document.referrer
    });

    SLOWER.orderList.config({
        all: $('#all'),
        unfilled: $('#unfilled'),
        unpay: $('#unpay'),
        receiving: $("#receiving"),
        done: $('#done')
    });
    SLOWER.orderList.render();
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.orderList = (function () {

    let status = {};
    let  menu = {};
    /**
     * 如果value 不为空则设置hash值，否则返回当前的hash值
     * @private
     */
    function __hash__(value) {
        return value ? (window.location.hash = '!/' + value): window.location.hash.toString().replace('#!/', '');
    }

    function __page__(page) {
        __hash__(page);

        $('.menu > div').css({'border-bottom':'solid 3px #ffffff'});
        $('#'+page).css({'border-bottom':'solid 3px rgb(224, 98, 13)'});

        $.post("/order/" + page, null, function (data) {
            // console.log(data);

            $('#list').html('');

            if(data.status === "success"){
                data.orders.forEach(function (item) {
                    let data = {
                        price: item.price,
                        orderId: item.id
                    };

                    let $order = $('#'+ page +'-template').tmpl(data);
                    $order.appendTo('#list');

                    if(page === "receiving"){
                        $order.find('.received').click(function () {

                            $.post("/order/received", {orderId: item.id}, function (data) {
                                // console.log(data);
                                if(data.status !== "success"){
                                    location.reload(true);
                                }
                            })
                        })
                    }

                    $.post("/order/" + item.id, null, function (data) {
                        // console.log(data);

                        if(data.status === "success"){
                            data.books.forEach(function (item) {
                                $order.find('.covers').append($(
                                    '<div class="cover"><img src="' + item.cover + '"> </div>'
                                ));
                            })
                        }
                    });

                });
            }
        })
    }


    return {

        config: function (conf) {
            menu.all = conf.all;
            menu.unfilled = conf.unfilled;
            menu.unpay = conf.unpay;
            menu.receiving = conf.receiving;
            menu.done = conf.done;

            // 注册点击事件
            menu.all.click(()=>__page__('all'));
            menu.unfilled.click(()=>__page__('unfilled'));
            menu.unpay.click(()=>__page__('unpay'));
            menu.receiving.click(()=>__page__('receiving'));
            menu.done.click(()=>__page__('done'));
        },

        render:function () {
            status = __hash__();
            if(!status) status = "all";
            __page__(status);
        }

    }
})();