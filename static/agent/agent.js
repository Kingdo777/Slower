$(document).ready(function () {

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

    let socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = function(event){
        $('.status').css({'background-color':'green'});
    };
    socket.onmessage = function(event) {
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
        send: function () {
            let $input = $('#input');
            let message = $input.val();

            if(message === '') return;

            $input.val('');

            $('#send > div').css({'background-color':'#cccccc'});

            let data = { content: message, toId: 0 };

            socket.send(JSON.stringify(data));
            add_user_message(message);
        }
    }
})();