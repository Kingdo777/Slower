$(document).ready(function () {
    SLOWER.history.render();
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.history = (function () {
    let page = 0;

    return {
        render:function () {
            $.post('/book/histories', {page: page}, function (data) {
                if(data.status === "success"){
                    data.books.forEach(function (item) {
                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            summary: item.summary.substr(0, 50) + '...',
                            author: item.author
                        };

                        $('#book-template').tmpl(data).appendTo("#book-list");
                    })
                }

            });
        }
    }
})();