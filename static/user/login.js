/**
 * Created by ice_q on 2017/7/19.
 */
$(document).ready(function () {
    SLOWER.user.login();
    SLOWER.user.signup();
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.user = (function () {

    function errorBox(message) {
        let errorBox = $("<div class='error'><span class='box'>" + message +"</span></div>");
        errorBox.appendTo('body');
        setTimeout(function () {
            errorBox.fadeOut();
        }, 1000);
    }

    return {
        login: function () {
            $('#login').find(".submit").click(function () {

                let username = $('#login').find('.username').val();
                let password = $('#login').find('.password').val();

                if(username === "")
                    errorBox("用户名不能为空!");
                else if(password.length < 6)
                    errorBox("密码长度不能小于6!");
                else{
                    $.post("/user/login", { username: username, password: password }, function (data) {
                        if(data.status === "success"){
                            window.location.href = "/home";
                        }
                        else {
                            errorBox("用户名或密码错误!");
                        }
                    });
                }
            });
        },

        signup: function () {
            $('#signup').find('.submit').click(function () {
                let username = $('#signup').find('.username').val();
                let password = $('#signup').find('.password').val();
                let rpassword = $('#signup').find('.password-repeat').val();

                if(username === "")
                    errorBox("用户名不能为空!");
                else if(password === "")
                    errorBox("密码长度不能小于6!");
                else if(password === rpassword){
                    $.post("/user/signup", { username: username, password: password}, function (data) {
                        console.log(data);
                        if(data.status === "success"){
                            window.location.href = "/home";
                        }
                    });
                }
            })
        }
    }

})();