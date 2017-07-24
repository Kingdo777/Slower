$(document).ready(function () {
    // 返回按钮
    $('#back').click(function () {
        location.href = document.referrer;
    });

    SLOWER.search.init();

    // 查找
    $('#search').keyup(function (event) {
        if(event.keyCode ===13 && $(this).val() !== ""){
            SLOWER.search.search($(this).val());
        }
    });
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.search = (function () {
    /**
     * 如果value 不为空则设置hash值，否则返回当前的hash值
     * @private
     */
    function __hash__(value) {
        return value ? (window.location.hash = '!/' + value): window.location.hash.toString().replace('#!/', '');
    }

    let params = {};

    function __params__() {
        let hash = __hash__();
        let res;
        let re = /(\w+)=([^&]+)/g;
        while ((res = re.exec(hash)) !== null){
            params[res[1]] = res[2];
        }

        if(!params.scope)
            params.scope = "all";
    }

    /**
     * 无参：获取content值
     * 有参: 设置params和hash中content的值
     * @private
     */
    function __content__(content) {
        if(!content)
            return params.content;

        params.content = content;

        let hash = __hash__();
        let re = /content=(.+)/g;
        if(re.test(hash))
            __hash__(hash.replace(re, 'content=' + content));
        else
            __hash__(hash + '&content=' + content);
    }

    function __scope__(scope) {
        return scope ? params.scope = scope : params.scope;
    }

    return {
        init:function () {
            __params__();
            $('#search').val(__content__());

            this.search(__content__());
        },

        /**
         * 搜索
         * @param content
         */
        search: function (content) {
            __content__(content);
            __params__();

            $('#list').text('');

            if(!__content__()) return;

            $.post('/search/' + __scope__(), { content: __content__() }, function (data) {

                if(data.status === "success"){
                    data.books.forEach(function (item) {
                        let data = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            summary: item.summary.substr(0, 50) + '...',
                            author: item.author
                        };

                        $('#book-template').tmpl(data).appendTo('#list');
                    })
                }
            });
        }
    }
})();