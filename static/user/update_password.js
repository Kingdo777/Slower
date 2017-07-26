$(document).ready(function () {

    $('#back').click(function () {
        location.href = document.referrer;
    });

    $('#ensure').click(function () {
        let old_password = $('#old-password').val();
        let new_password = $('#new-password').val();

        $.post("/user/update_password", {old: old_password, new: new_password}, function (data) {
            if(data.status === "success"){
                location.href = "/user";
            }
        })
    })
});