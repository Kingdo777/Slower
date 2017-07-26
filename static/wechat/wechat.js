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
    wx.getLocalImgData({
        localId: '', // 图片的localID
        success: function (res) {
            let localData = res.localData; // localData是图片的base64数据，可以用img标签显示
            upload(localData);
        }
    });
}
function getBlobBydataURI(dataURI,type) {
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for(let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type:type });
}
/**
 * 上传
 */
function upload(localData){
    //base64 转 blob
    let binary = atob(localData);
    let array = [];
    for(let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    let Blob = new Blob([new Uint8Array(array)], {type:type });
    let formData = new FormData();
    formData.append("files", Blob ,"file_"+Date.parse(new Date())+".jpeg");
    //组建XMLHttpRequest 上传文件
    let request = new XMLHttpRequest();
    //上传连接地址
    request.open("POST", "/user/newAvatar");
    request.onreadystatechange=function()
    {
        if (request.readyState===4)
        {
            if(request.status===200){
                console.log("上传成功");
            }else{
                console.log("上传失败,检查上传地址是否正确");
            }
        }
    };
    request.send(formData);
}