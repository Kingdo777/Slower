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
    $(".bill-record-link").on("click",function () {
        showBillInfo();
    });
    $("#users-messages").on("click",function () {
        location.assign("/admin/chat")
    });
    $(".user-info-link").on("click",function () {
        showUserInfo();
    });
    $(".sort-link").on("click",function () {
       classManager();
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
                        "purchase Count-->" +data.books[i][j].count+
                        "</td>" +
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
                        "purchase count-->" +data.books[i][j].count+
                        "</td>" +
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
function showBillInfo() {
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/admin/getBill",
        success:function (data) {
            $(".bill-record-tr").remove();
            for (let i=0;i<data.length;i++){
                let date = new Date(data[i].createTime); //获取一个时间对象
                let time=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+"   "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                $(".bill-record-table").append("" +
                    "<tr class='bill-record-tr'>" +
                    "<td>"+data[i].userId+"</td>"+
                    "<td>"+data[i].userName+"</td>"+
                    "<td>"+data[i].	price+"元</td>"+
                    "<td>"+data[i].oddNumber+"</td>"+
                    "<td>"+time+"</td>"+
                    "</tr>" +
                    "");
            }
            $(".left_menu").css("height",$(".bottom-content").css("height"));
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    })
}
function showUserInfo() {
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/admin/getAllUserAndOrderInfo/",
        success:function (data) {
            $(".user-info-tr").remove();
            for (let i=0;i<data.length;i++){
                let date = new Date(data[i].time); //获取一个时间对象
                let time=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+"   "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                let tel=(typeof (data[i].tel)!=="undefined")?data[i].tel:"用户未填写";
                let email=(typeof (data[i].email)!=="undefined")?data[i].email:"用户未填写";
                $(".user-info-table").append("" +
                    "<tr class='user-info-tr'>"+
                    "<td>"+data[i].userId+"</td>"+
                    "<td>"+data[i].userName+"</td>"+
                    "<td>"+tel+"</td>"+
                    "<td>"+email+"</td>"+
                    "<td>"+time+"</td>"+
                    "<td>"+data[i].count+"</td>"+
                    "<td>"+data[i].price+"</td>"+
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

function classManager() {
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/admin/getClassInfo/",
        success:function (data) {
            $(".class-info-li").remove();
            let first_class_ul=$(".first-class-ul");
            let second_class_ul;
            for (let i=0;i<data.first.length;i++){
                first_class_ul.append("" +
                    "<li class='class-info-li' style='float: left'><b>" +data.first[i].name+"</b>"+
                    "<img src='/static/image/icons/delete.png' style='width: 20px;margin-left: 5px;cursor: hand' onclick='deleteFirstClass("+data.first[i].id+")'>" +
                    "<ul class='second-class-ul-"+data.first[i].name.toString()+"'></ul>" +
                    "</li>");
                second_class_ul=$(".second-class-ul-"+data.first[i].name.toString());
                for (let j=0;j<data.second[i].length;j++){
                    second_class_ul.append("" +
                        "<li>"+data.second[i][j].name+"" +
                        "<img src='/static/image/icons/delete.png' style='width: 20px;margin-left: 5px;cursor: hand' onclick='deleteSecondClass("+data.second[i][j].id+")'>" +
                        "</li>" +
                        "");
                }
                second_class_ul.append("" +
                    "<li class='new-second-class-"+data.first[i].id+"' style='list-style-type: none;cursor: hand;border: none;padding: 0'>" +
                    "<span onclick='newSecondClass("+data.first[i].id+")'>+新增分类</span>" +
                    "</li>" +
                    "");
            }
            first_class_ul.append("" +
                "<li class='new-first-class class-info-li' style='list-style-type: none;cursor: hand;border: none'>" +
                "<span class='newClass' onclick='newFirstClass()'><b>+新增一级分类</b></span>" +
                "</li>" +
                "");
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    });
}
function newFirstClass() {
    if($(".new-first-class-form").length===0){
        $(".new-first-class").append("<form class='new-first-class-form'>" +
            "<input title='name' placeholder='new class name' class='new-first-class-input'>" +
            "<button onclick='saveFirstClass()'>save</button>"+
            "</form>")
    }
}
function saveFirstClass() {
    let name=$('.new-first-class-input').val();
    if (name.trim()===""){
        $(".new-first-class-form").remove();
    }else {
        $(".new-first-class-form").remove();
        $.ajax({
            type:"post",
            url:"/admin/newFirstClass/"+name,
            dataType:"text",
            success:function () {
                $(".sort-link").trigger("click");
            }
        });
    }
}
function newSecondClass(firstClassId) {
    if($(".new-first-class-form-"+firstClassId).length===0){
        $(".new-second-class-"+firstClassId).append("<form class='new-second-class-form-"+firstClassId+"'>" +
            "<input title='name' placeholder='new class name' class='new-second-class-input-"+firstClassId+"' style='width: 150px'>" +
            "<br/><button onclick='saveSecondClass("+firstClassId+")'>save</button>"+
            "</form>")
    }
}
function saveSecondClass(firstClassId) {
    let name=$('.new-second-class-input-'+firstClassId).val();
    if (name.trim()===""){
        $(".new-second-class-form-"+firstClassId).remove();
    }else {
        $(".new-second-class-form-"+firstClassId).remove();
        $.ajax({
            type:"post",
            url:"/admin/newSecondClass/"+firstClassId+"/"+name,
            dataType:"text",
            success:function () {
                $(".sort-link").trigger("click");
            }
        });
    }
}

function deleteFirstClass(firstClassId) {
    $.ajax({
        type:"post",
        url:"/admin/deleteFirstClass/"+firstClassId,
        dataType:"text",
        success:function (ok) {
            if(ok==='success'){
                $(".sort-link").trigger("click");
            }else{
                alert("请先删除该分类下的所有二级分类");
            }
        }
    });
}

function deleteSecondClass(secondClassId) {
    $.ajax({
        type:"post",
        url:"/admin/deleteSecondClass/"+secondClassId,
        dataType:"text",
        success:function (ok) {
            if(ok==='success'){
                $(".sort-link").trigger("click");
            }else{
                alert("请先删除或更改该该分类下的所有书籍")
            }
        }
    });
}