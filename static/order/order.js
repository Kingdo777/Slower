$(document).ready(function () {
    $('#pay').click(function () {
        SLOWER.order.pay();
    });
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.order =(function () {

    return {
        pay: function () {
            window.location.href = "/wechat/payPage?price=100";
        }
    }
})();