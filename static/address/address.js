/**
 * Created by kingdo on 7/24/17.
 *
 */
$(function () {

    $('#back').click(function () {
        location.href = "/user/setting";
    });

    $('#new-address-back').click(function () {
        location.href = "/address/show";
    });

    $("#receiverName").focus();
    $("#detailText").on("propertychange",function () {
        if(this.scrollHeight>this.style.height.replace(/px/,'')){
            this.style.height=this.scrollHeight + 'px';
        }
    }).on("input",function () {
        if(this.scrollHeight>50){
            this.style.height=this.scrollHeight + 'px';
        }
    });
    $('.province-select').on('change',function () {
        let province_id = $('.province-select option:selected').val();
        $.ajax({
            type: 'post',
            url: '/address/getCities/'+province_id,
            dataType: 'json',
            success: function(dates){
                $('.city-item').remove();
                for (let k in dates){
                    $('.city-select').append('' +
                        '<option  value="'+dates[k].id+'" class="city-item">'+dates[k].name+'</option>' +
                        '')
                }
            },
            error: function(xhr){
                $('html').html(xhr.responseText);
            }
        });
    });



    $(".submit-btn").on("click",function () {
        let ifSubmit=true;
        $("input").each(function(){  //遍历input标签，判断是否有内容未填写
            if($(this).val()===''){
                ifSubmit=false;
                return false;
            }
        });
        if ($("textarea").val()===''){
            ifSubmit=false;
        }
        if ($(".province-select option:selected").val()===''){
            ifSubmit=false;
        }
        if(ifSubmit){
            $("form").submit();
        }else {
            alert("Incomplete data");
        }
    });
});