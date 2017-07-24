/**
 * Created by kingdo on 7/24/17.
 */
$(function () {
    $("#receiverName").focus();
    $("#detailText").on("propertychange",function () {
        this.style.height=this.scrollHeight + 'px';
    }).on("input",function () {
        this.style.height=this.scrollHeight + 'px';
    })
});