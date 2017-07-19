/**
 * Created by ice_q on 2017/7/18.
 *
 */
(function($){
    $.fn.tmpl = function(data) {
        this.hide();
        return $(this.html().replace(/{{ *([a-z_]*) *}}/g, function (match, $1) {
            return data[$1];
        }));
    }
})(jQuery);