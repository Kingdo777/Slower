/**
 * Created by kingdo on 7/19/17.
 *
 */
$(function () {
    let nonceStr=randomWord();
    let timestamp=Math.round(new Date().getTime()/1000) ;
    $.ajax({
        type: 'get',
        url: "/wechat/getSignature?nonceStr="+nonceStr+"&timestamp="+timestamp+"&url="+window.location.href,
        dataType: 'text',
        success: function (signature) {
            wx.config({

                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

                appId: 'wx7495c0e23819716a', // 必填，公众号的唯一标识

                timestamp: timestamp, // 必填，生成签名的时间戳

                nonceStr: nonceStr, // 必填，生成签名的随机串

                signature: signature,// 必填，签名，见附录1

                jsApiList: ['scanQRCode','chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

            });
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    });
});

function scanQRCode() {
    wx.scanQRCode({
        needResult: 1,
        scanType: ["qrCode", "barCode"],
        success: function (res) {
            alert(res.resultStr);
            return res.resultStr;
        },
        error:function () {
            return "error";
        }
    })
}
