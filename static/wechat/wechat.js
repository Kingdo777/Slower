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

                jsApiList: ['scanQRCode','chooseWXPay','chooseImage','uploadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

            });
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    });
});
function scanQRCode(callBackFun) {
    wx.scanQRCode({
        needResult: 1,
        scanType: ["qrCode", "barCode"],
        success: function (res) {
            // alert(res.resultStr.split(",")[1]);
            callBackFun(res.resultStr.split(",")[1])
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    })
}
function wxpay(money,oddNumber,callBackUrl,orderId) {
    let nonceStr=randomWord();
    let timestamp=Math.round(new Date().getTime()/1000);
    $.ajax({
        type: 'post',
        url: '/wechat/pay',
        data:{
            nonceStr:nonceStr,
            timestamp:timestamp,
            money:money,
            oddNumber:oddNumber
        },
        dataType: 'json',
        success: function(data){
            wx.chooseWXPay({
                timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
                package: "prepay_id="+data['prepayId'], // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: data['sign'], // 支付签名
                success: function () {
                    $.ajax({
                        type:"post",
                        url:"/order/payOrder/"+orderId+"/"+oddNumber
                    });
                    location.assign(callBackUrl);
                }
            });
        },
        error: function(xhr){
            $('html').html(xhr.responseText);
        }
    });
}
function getAvatar() {
    wx.chooseImage({

        count: 1, // 默认9

        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有

        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

        success: function (res) {

            let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            wx.uploadImage({
                localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    setTimeout(function () {
                        let serverId = res.serverId.toString(); // 返回图片的服务器端ID
                        $.ajax({
                            type:"post",
                            url:"/user/newAvatar",
                            data:{
                                serverId:serverId
                            },
                            success:function () {
                                location.reload(true);
                            },
                            error(xhr){
                                $('html').html(xhr.responseText);
                            }
                        });
                    },100);
                }
            });
        }
    });
}
