$(document).ready(function () {

    SLOWER.agent.render();

    // 返回上一个界面
    $('#back').click(function () {
        window.location.href =  document.referrer;
    });

    // 发送按钮的颜色变化
    $('#input').bind('input propertychange', function () {

        let $send_btn = $('#send > div');

        $(this).val().length ? $send_btn.css({'background-color': 'rgb(224, 98, 13)'})
            : $send_btn.css({'background-color': '#cccccc'});
    }).keyup(function (event) {
        if(event.keyCode === 13)
            SLOWER.agent.send();
    });

    // 发送消息
    $('#send').click(function () {
        SLOWER.agent.send();
    });
});


if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.agent = (function () {

    let socket = new WebSocket("ws://firstsnow.me/ws");

    socket.onopen = function(event){
        $('.status').css({'background-color':'green'});
    };
    socket.onmessage = function(event) {
        console.log("收到一条信息: " + event.data);
        add_agent_message(JSON.parse(event.data).content);
    };
    socket.onclose = function(event){
        $('.status').css({'background-color':'#aaaaaa'});
    };
    socket.onerror = function(event){
        //连接过程中出错时触发
        console.log("WebSocket发生错误!");
    };


    function add_user_message(message) {
        $('#user-template').tmpl({message:message}).appendTo('.page');
    }

    function add_agent_message(message) {
        $('#agent-template').tmpl({message:message}).appendTo('.page');
    }
    return {
        render: function () {
            let data = {
                toId: 6,
                fromId: 0,
                page: 0
            };
            $.post('/admin/chat/messages' , data, function (data) {
                console.log(data);

                data.messages.forEach(function (item) {
                    if(item.fromId === hostId) {
                        add_user_message(item.content)
                    }
                    else if(item.toId === hostId) {
                        add_agent_message(item.content);
                    }
                })
            });
        },

        send: function () {
            let $input = $('#input');
            let message = $input.val();

            if(message === '') return;

            $input.val('');

            $('#send > div').css({'background-color':'#cccccc'});

            let data = { content: message, toId: agentId, fromId: hostId };

            socket.send(JSON.stringify(data));
            add_user_message(message);
        }
    }
})();