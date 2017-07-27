/**
 * Created by ice_q on 2017/7/18.
 *
 */
(function($){
    let index = 0;
    let config = {};
    let timer_auto;
    let timer;

    function auto_play() {
        index = (index + 1) % config.length;

        config.main.animate({
            left: '-'+ index + '00%'
        });

        config.main.css({ left: '-'+ index + '00%' });
        config.nav.find('>li').css({ 'background-color':'white'});
        $(config.nav.find('>li')[index]).css({ 'background-color':'yellow'});

        timer_auto = setTimeout(auto_play, config.interval);
    }

    function go(page) {
        index = page;

        config.main.animate({
            left: '-'+ index + '00%'
        });

        config.main.css({ left: '-'+ index + '00%' });
        config.nav.find('>li').css({ 'background-color':'white'});
        $(config.nav.find('>li')[index]).css({ 'background-color':'yellow'});

        clearTimeout(timer_auto);
        clearTimeout(timer);
        timer = setTimeout(auto_play, config.interval);
    }

    function init() {
        config.nav = $('<ul id="slider-nav"></ul>');
        config.that.append(config.nav);

        for(let i = 0; i < config.length; ++i) {
            let $temp = $('<li><div></div></li>');
            $temp.click(function () {
                go(i);
            });
            config.nav.append($temp);
        }
    }

    $.fn.slider = function (conf) {
        conf = conf || {};

        config = {
            that: $(this),
            main: $(this).find('#main'),
            length: $(this).find('#main > li').length,
            interval: conf.interval || 3000
        };

        init();
        auto_play(config.interval);
    }
})(jQuery);