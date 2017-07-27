/**
 * Created by kingdo on 7/25/17.
 *
 */
let page=0;
$(function () {
    /**
     * 左侧栏的切换
     * */
    $(".link-btn").on("click",function () {
        $(".body-content").each(function () {
            $(this).css("display","none");
        });
        $("."+$(this).attr("content")).css("display","block");
        $(".bottom-content").css("height","100%");
    });
    /**
     * 书单上传
     * */
    $("#sub_btn").on("click",function () {
        $('#upload_file').trigger("click").on('change',function () {
            $('#newBook-form').submit();
        });
    });
    $(".book-info-link").on("click",function () {
        page=0;
        nextBookInfoPage(0)
    });
    $(".book-info-next-page").on("click",function () {
        nextBookInfoPage(++page);
    });
    $(".book-info-previous-page").on("click",function () {
        nextBookInfoPage(page===0?0:--page);
    });
    $(".comprehensive-query-button").on("click",function () {
        page=0;
        nextBookInfoPage(0);
    });
    $(".book-purchase-order-link").on("click",function () {
        showUnFilledOrderInfo();
    });
    $(".order-info-link").on("click",function () {
        showAllOrderInfo();
    });
    $(".toggle-display-bookInfo").on("click",function () {
       if($(this).attr("content")==='0'){
           $(this).attr("content",'1');
           $(".allOrderInfo-bookInfo").show();
       } else{
           $(this).attr("content",'0');
           $(".allOrderInfo-bookInfo").hide();
       }
    });
    $(".toggle-display-purchase-bookInfo").on("click",function () {
        if($(this).attr("content")==='0'){
            $(this).attr("content",'1');
            $(".UnFilledOrderInfo-bookInfo").show();
        } else{
            $(this).attr("content",'0');
            $(".UnFilledOrderInfo-bookInfo").hide();
        }
    });
});
function nextBookInfoPage(MyPage) {
    let ISBN_=$(".ISBN-input").val();
    let title_=$(".title-input").val();
    let author_=$(".author-input").val();
    let size_=$(".size-input").val();
    if(isNaN(size_)||size_===""){
        size_=50;
        $(".size-input").val(50)
    }
    $("#export_file").attr("href","/admin/exportBook/?page="+page+"&ISBN="+ISBN_+"&title="+title_+"&author="+author_+"&size="+size_);
    $.ajax({
        type:"post",
        dataType:"json",
        data:{
            ISBN:ISBN_,
            title:title_,
            author:author_,
            size:size_
        },
        url:"/admin/getBookInfo/"+MyPage,
        success:function (data) {
            if (data.length<50){
                $(".book-info-next-page").attr("disabled","disabled")
            }else {
                $(".book-info-next-page").removeAttr("disabled")
            }
            $(".book-info-tr").remove();
            for (let i=0;i<data.length;i++){
                $(".book-info-table").append("" +
                    "<tr class='book-info-tr'>"+
                    "<td>"+data[i].ISBN+"</td>"+
                    "<td>"+data[i].title+"</td>"+
                    "<td>"+data[i].author+"</td>"+
                    "<td>"+data[i].firstSortName+"</td>"+
                    "<td>"+data[i].secondSortName+"</td>"+
                    "<td>"+data[i].purchaseNum+"</td>"+
                    "<td>"+data[i].saleNum+"</td>"+
                    "<td>"+data[i].stockNum+"</td>"+
                    "</tr>" +
                    "");
            }
            $(".left_menu").css("height",$(".bottom-content").css("height"));
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    });
}

function showUnFilledOrderInfo() {
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/admin/getUnFilledOrderInfo/",
        success:function (data) {
            $(".UnFilledOrderInfo-tr").remove();
            $(".UnFilledOrderInfo-bookInfo").remove();
            for (let i=0;i<data.orders.length;i++){
                // 简单的一句代码
                let date = new Date(data.orders[i].create_time); //获取一个时间对象
                let time=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+"   "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                $(".book-purchase-order-table").append("" +
                    "<tr class='UnFilledOrderInfo-tr'>" +
                    "<td>"+data.orders[i].oddNumber+"</td>"+
                    "<td>"+data.orders[i].userId+"</td>"+
                    "<td>"+data.orders[i].receiverName+"</td>"+
                    "<td>"+data.orders[i].tel+"</td>"+
                    "<td>"+data.orders[i].details+"</td>"+
                    "<td>"+data.orders[i].price+"</td>"+
                    "<td>"+time+"</td>"+
                    "<td><a class='DeliverGoods-link' onclick='DeliverGoods("+data.orders[i].orderId+")'>发货</a></td>"+
                    "</tr>" +
                    "");
                for (let j=0;j<data.books[i].length;j++){
                    // 简单的一句代码
                    $(".book-purchase-order-table").append("" +
                        "<tr class='UnFilledOrderInfo-bookInfo' style='display: none'>" +
                        "<td style='text-align: left' colspan='8'>书籍信息：" +
                        "ISBN-->"+data.books[i][j].ISBN+
                        "title-->" +data.books[i][j].title+
                        "author-->" +data.books[i][j].author+
                        "price-->" +data.books[i][j].price+
                        "stockNum-->" +data.books[i][j].stockNum+
                        "</td>>" +
                        "</tr>" +
                        "");
                }
            }
            $(".left_menu").css("height",$(".bottom-content").css("height"));
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    })
}
function showAllOrderInfo() {
    let orderStatus=["未支付","未发货","未签收","未评论","已完成","已取消"];
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/admin/getAllOrderInfo",
        success:function (data) {
            $(".allOrderInfo-tr").remove();
            $(".allOrderInfo-bookInfo").remove();
            for (let i=0;i<data.orders.length;i++){
                let date = new Date(data.orders[i].create_time); //获取一个时间对象
                let time=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+"   "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                $(".book-order-table").append("" +
                    "<tr class='allOrderInfo-tr'>" +
                    "<td>"+data.orders[i].oddNumber+"</td>"+
                    "<td>"+data.orders[i].userId+"</td>"+
                    "<td>"+data.orders[i].receiverName+"</td>"+
                    "<td>"+data.orders[i].tel+"</td>"+
                    "<td>"+data.orders[i].details+"</td>"+
                    "<td>"+data.orders[i].price+"</td>"+
                    "<td>"+time+"</td>"+
                    "<td>"+orderStatus[parseInt(data.orders[i].status)]+"</td>"+
                    "</tr>" +
                    "");
                for (let j=0;j<data.books[i].length;j++){
                    // 简单的一句代码
                    $(".book-order-table").append("" +
                        "<tr class='allOrderInfo-bookInfo' style='display: none'>" +
                        "<td style='text-align: left' colspan='8'>书籍信息：" +
                        "ISBN-->"+data.books[i][j].ISBN+
                        "title-->" +data.books[i][j].title+
                        "author-->" +data.books[i][j].author+
                        "price-->" +data.books[i][j].price+
                        "stockNum-->" +data.books[i][j].stockNum+
                        "</td>>" +
                        "</tr>" +
                        "");
                }
            }
            $(".left_menu").css("height",$(".bottom-content").css("height"));
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    })
}
function DeliverGoods(orderId) {
    $.ajax({
        type:"post",
        url:"/admin/DeliverGoods/"+orderId,
        dataType:'text',
        success:function (data) {
            alert(data);
            $(".book-purchase-order-link").trigger("click");
        }
    });
}
