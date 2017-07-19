/**
 * Created by ice_q on 2017/7/19.
 */
$(document).ready(function () {
    $('.summary .more').click(function () {
        $('.summary .content').css({ overflow: "auto", height: "auto" });
        $(this).hide();
    });

    //
    SLOWER.book_details.init({
        back: $('.nav .back'),
        back_url: document.referrer,
        main: $('.menu .main'),
        details:$('.menu .details'),
        review:$('.menu .review'),
    })
});

if(typeof SLOWER==="undefined") SLOWER={};
SLOWER.book_details = (function () {
    let menu = {};

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

        init: function (config) {
            menu.back = config.back;
            menu.back_url = config.back_url;
            menu.book = config.main;
            menu.details = config.details;
            menu.review = config.review;

            menu.back.click(() => window.location.href=menu.back_url);
            menu.book.click(() => __hash__("book"));
            menu.details.click(() => __hash__("details"));
            menu.review.click(() => __hash__("review"));



            // 刷新或者初始化
            __page__(__hash__());

            // hash 变化事件
            window.onhashchange = () =>__page__(__hash__());
        }
    }
})();