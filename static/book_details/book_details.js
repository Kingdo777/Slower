/**
 * Created by ice_q on 2017/7/19.
 *
 */
$(document).ready(function () {
    $('.summary .more').click(function () {
        $('.summary .content').css({ overflow: "auto", height: "auto" });
        $(this).hide();
    });

    // 显示 隐藏菜单
    let isShow = false;
    $('.others .more').click(function () {

        if(!isShow) {
            $('.others .second-menu').show();
            isShow = true;
        }
        else {
            $('.others .second-menu').hide();
            isShow = false;
        }
    });

    $('.nav .back').click(function () {
        location.href = document.referrer;
    });

    // 初始化 菜单
    SLOWER.book_details.init({
        main: $('.menu .main'),
        details:$('.menu .details'),
        review:$('.menu .review'),
    });

    // 添加到书架 点击事件
    $('footer .add_to_bookrack').click(function () {
        SLOWER.book_details.addBookrack();
    });

    // 添加到购物车 点击事件
    $('footer .add_to_cart').click(function () {
        SLOWER.book_details.addCart();
    });

    // 添加到关注 点击事件
    $('footer .collect').click(function () {
        SLOWER.book_details.addCollection();
    });
});

if(typeof SLOWER==="undefined") SLOWER={};
SLOWER.book_details = (function () {
    let menu = {};
    let conf = {};
    Object.defineProperty(conf, 'collected',{
        set:function (val) {

            if(this.isCollected !== !!val) {
                let bookId = $('#bookId').text();

                if(!!val){
                    $.post('/collect/add', { bookId: bookId }, function (data) {
                        if(data.status !== "success"){
                            alert("关注失败");
                        }
                    });
                }
                else {
                    $.post('/collect/del', { bookId: bookId }, function (data) {
                        if(data.status !== "success"){
                            alert("取消关注失败");
                        }
                    });
                }
            }

            this.isCollected = !!val;

            if(this.isCollected){
                $('#like').hide();
                $('#like-fill').show();
            }
            else {
                $('#like').show();
                $('#like-fill').hide();
            }
        },
        get:function () {
            return this.isCollected;
        }
    });


    Object.defineProperty(conf, 'inBR',{
        set:function (val) {

            if(this.isInBR !== !!val && !!val) {
                let bookId = $('#bookId').text();

                $.post('/bookrack/add', {bookId: bookId}, function (data) {
                    console.log(data);
                })
            }

            this.isInBR = !!val;

            if(this.isInBR){
                $('.add_to_bookrack').text('已加入');
            }
            else {
                $('.add_to_bookrack').text('加入书架');
            }
        },
        get:function () {
            return this.isInBR;
        }
    });

    /**
     * 显示当前界面
     * @param page
     * @private
     */
    function __page__(page) {
        if(page === "")
            page = "book";

        $('.show').attr("class", "").hide();
        $('#' + page).attr("class", "show").show();

        $('.selected').attr('class', '');
        menu[page].attr('class', 'selected');
    }

    /**
     * 如果value 不为空则设置hash值，否则返回当前的hash值
     * @private
     */
    function __hash__(value) {
        return value ? (window.location.hash = '!/' + value): window.location.hash.toString().replace('#!/', '');
    }

    return {

        /**
         * 初始化菜单
         * @param config
         */
        init: function (config) {
            menu.book = config.main;
            menu.details = config.details;
            menu.review = config.review;

            menu.book.click(() => __hash__("book"));
            menu.details.click(() => __hash__("details"));
            menu.review.click(() => __hash__("review"));

            // 刷新或者初始化
            __page__(__hash__());

            conf.isCollected = !!isCollected;
            conf.isInBR = !!isInBR;
            conf.collected = !!isCollected;
            conf.inBR = !!isInBR;

            // hash 变化事件
            window.onhashchange = () =>__page__(__hash__());
        },

        /**
         * 添加到书架
         */
        addBookrack: function () {
            conf.inBR = true;
        },

        /**
         * 添加到购物车
         */
        addCart:function () {
            let bookId = $('#bookId').text();

            if(bookId !== ""){
                $.post("/shopping_cart/add", {bookId: bookId}, function (data) {

                    console.log(data);
                })
            }

            let $c2c = $('<div id="cart-cart"></div>');
            $('body').append($c2c);

            console.log( $(window).height());
            $c2c.fly({
                start:{
                    left: $(window).width() - 75,
                    top: window.screen.height  - 50
                },

                end:{
                    left:75,
                    top: window.screen.height   - 50,
                },
                onEnd: function () {
                    this.destroy();
                }
            })
        },

        /**
         * 关注
         */
        addCollection: function () {
            conf.collected = !conf.collected;
        }
    }
})();