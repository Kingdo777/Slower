/**
 * Created by ice_q on 2017/7/20.
 *
 */
$(document).ready(function () {

    /**
     * 退出登录，成功后跳转到首页
     */
    $('.logout').click(function () {
        $.post("/user/logout", null, function (data) {
            if(data.status === "success"){
                window.location.href = "/home";
            }
        })
    });

});