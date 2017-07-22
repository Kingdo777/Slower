page=0;
let secondID;
$(function () {
    let client_height = parseInt(window.screen.availHeight, 10);
    let ifLoad=$("#ifLoad");
    $(window).scroll(function () {
        let scroll_height = parseInt(document.body.scrollHeight, 10);
        let max_scroll_top = scroll_height - client_height;
        let scroll_top = parseInt(document.body.scrollTop, 10);
        if (scroll_top >= max_scroll_top&&ifLoad.content==="false") {
            ifLoad.content="true";
            getbook(secondID);
            window.scrollTo(0, document.body.scrollHeight);
        }
        ifLoad.content="false";
    });
});
function getbook(secondCategoryID) {
    $.post("/list/getData", { secondCategoryID:secondCategoryID,page: page++, size: 25 }, function (resultInfo) {
        if(resultInfo.status === "success"){
            resultInfo.books.forEach(function (item) {
                let data = {
                    id: item.id,
                    cover: item.cover,
                    title: item.title,
                    summary: item.summary.substr(0, 50),
                    author: item.author
                };
                $('#book-template').tmpl(data).appendTo("#book-list");
            })
        }
    });
}
