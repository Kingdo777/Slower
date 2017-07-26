$(document).ready(function () {
    $('#back').click(function () {
        location.href = document.referrer;
    });


    $('#ensure').click(function () {
        let info = $('#info').text();
        if(info === "username")SLOWER.update_setting.username();
        if(info === "email") SLOWER.update_setting.email();
        if(info === "tel") SLOWER.update_setting.tel();
    })
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.update_setting = (function () {
    return {
        username: function () {
            let username = $('#input').val();
            $.post("/user/update_username", {username: username}, function (data) {
                if(data.status === "success"){
                    location.href = "/user";
                }
            });
        },

        email: function () {
            let email = $('#input').val();

            $.post("/user/update_email", {email: email}, function (data) {
                if(data.status === "success"){
                    location.href = "/user";
                }
            });
        },

        tel: function () {
            let tel = $('#input').val();

            $.post("/user/update_tel", {tel: tel}, function (data) {
                if(data.status === "success"){
                    location.href = "/user";
                }
            });
        }
    }
})();