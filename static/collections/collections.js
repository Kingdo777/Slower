$(document).ready(function () {
    SLOWER.collections.render();
});

if(typeof SLOWER === "undefined") SLOWER = {};

SLOWER.collections = (function () {
    return{

        /**
         * 渲染所有关注的商品
         */
        render:function () {
            $.post('/collect/all', null, function (data) {

                console.log(data);

                if(data.status === "success") {

                    data.books.forEach(function (item) {

                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            price: item.price,
                        };

                        $('#collection-template').tmpl(data).appendTo('.collections');
                    })
                }
            })
        }
    }
})();