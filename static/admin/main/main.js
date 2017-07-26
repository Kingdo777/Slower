/**
 * Created by kingdo on 7/25/17.
 *
 */
$(function () {
    let page=0;
    /**
     * 左侧栏的切换
     * */
    $(".link-btn").on("click",function () {
        $(".body-content").each(function () {
            $(this).css("display","none");
        });
        $("."+$(this).attr("content")).css("display","block");
    });
    /**
     * 书单上传
     * */
    $("#sub_btn").on("click",function () {
        $('#upload_file').trigger("click").on('change',function () {
            $('#newBook-form').submit();
        });
    });
    $(".book_info-link").on("click",function () {
        page=0;
        nextBookInfoPage(page++)
    });
    $(".book-info-next-page").on("click",function () {
        nextBookInfoPage(page++);
    })
});
function nextBookInfoPage(page) {
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/admin/getBookInfo/"+page,
        success:function (data) {
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
        },
        error:function (xhr) {
            $('html').html(xhr.responseText);
        }
    })
}
