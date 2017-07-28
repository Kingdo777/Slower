$(document).ready(function () {
    $('#least').click(function () {
        $(this).css({color: '#00b0e8'});
        $('#friends').css({color: '#888888'});
        $('.least-list').show();
        $('.friends-list').hide();
        // chat.showLatest();
    });

    $('#friends').click(function () {
        $(this).css({color: '#00b0e8'});
        $('#least').css({color: '#888888'});
        $('.least-list').hide();
        $('.friends-list').show();
        SLOWER.chat.render_all_client();
    });
});

if(typeof SLOWER==="undefined") SLOWER = {};
SLOWER.chat = (function () {

    let friends = {};
    let chatWindows = {};

    let socket = new WebSocket("ws://firstsnow.me/ws");

    socket.onopen = function(event){
        console.log("connect:success");
        $('.status').css({'background-color':'green'});
    };
    socket.onmessage = function(event) {
        console.log("收到一条消息：" + event.data);
        addFriendMessage(JSON.parse(event.data));
    };
    socket.onclose = function(event){
        $('.status').css({'background-color':'#aaaaaa'});
    };
    socket.onerror = function(event){
        //连接过程中出错时触发
        console.log("WebSocket发生错误!");
    };


    function chatWindow(window) {
        let username = $(window).children('.username').text();
        let user_id = $(window).children('.username').attr('id');

        if(document.getElementById('chat_' + user_id)){
            $('.chat').css({'z-index': 1});
            $('#chat_' + user_id).css({'z-index': 9999});
            return;
        }

        let user = friends[user_id];

        $('body').append(
            $('#chat-window-template').tmpl({ id: user.id, avatar: user.avatar, username: user.username, to_id: user.id })
        );

        showMessages(user.id);

        $('#chat_'+ user_id +' .send').click(function () {
            SLOWER.chat.send('#chat_'+ user_id);
        });

        $('.input-area textarea').keydown(function (event) {
            if(event.keyCode === 13){
                SLOWER.chat.send('#chat_'+ user_id);
            }
        });


        let temp;
        if((temp = JSON.parse(localStorage.getItem('chat_' + user_id)))){
            chatWindows['chat_' + user_id] = temp;
            $('.chat').css({'z-index': 1});
            $('#chat_' + user_id).css({
                top: chatWindows[$('#chat_' + user_id).attr('id')].top,
                left: chatWindows[$('#chat_' + user_id).attr('id')].left,
                'z-index': 999
            });
        }
        else {
            chatWindows['chat_' + user_id] = {}
        }

        chatWindows['chat_' + user_id].isSelected = false;

        /**
         * 聊天窗口的移动
         */
        $('#chat_' + user_id + ' .header').mousedown(function (down) {
            chatWindows['chat_' + user_id].isSelected  = true;
            chatWindows['chat_' + user_id].X  = down.clientX;
            chatWindows['chat_' + user_id].Y  = down.clientY;
            chatWindows['chat_' + user_id].top = $('#chat_' + user_id).position().top;
            chatWindows['chat_' + user_id].left = $('#chat_' + user_id).position().left;

            $('.chat').css({'z-index': 1});
            $('#chat_' + user_id).css({'z-index': 9999});

            // console.log(down);
        }).mousemove(function (move) {
            if(chatWindows['chat_' + user_id].isSelected === true) {
                let moveX = chatWindows['chat_' + user_id].X - move.clientX;
                let moveY = chatWindows['chat_' + user_id].Y - move.clientY;

                chatWindows['chat_' + user_id].X -= moveX;
                chatWindows['chat_' + user_id].Y -= moveY;

                chatWindows['chat_' + user_id].top -= moveY;
                chatWindows['chat_' + user_id].left -= moveX;


                // console.log(moveX);
                // console.log(moveY);

                $('#chat_' + user_id).css({
                    top: chatWindows['chat_' + user_id].top,
                    left: chatWindows['chat_' + user_id].left
                });
            }
            //
        }).mouseup(function () {
            chatWindows['chat_' + user_id].isSelected = false;
        }).mouseout(function () {
            chatWindows['chat_' + user_id].isSelected = false;
        });


        $('#chat_'+ user_id +' .header .close').click(function () {
            localStorage.setItem('chat_' + user_id, JSON.stringify(chatWindows['chat_' + user_id]));
            console.log(JSON.parse(localStorage.getItem('chat_' + user_id)));
            $('#chat_' + user_id).remove();
        });
    }

    function addMineMessage(data) {
        $('#chat_'+ data.toId +' .messages .list').append($(
            '<div class="mine">'+
            '   <span class="avatar">'+
            '       <img src="/static/image/avatar/avatar.jpg"/>'+
            '   </span>'+
            '   <span class="bubble">'+
            '       <span class="corner">'+
            '           <span></span>'+
            '       </span>'+
            '       <span class="message">'+ data.content +'</span>'+
            '   </span>'+
            '</div>')
        );
    }

    function showMessages(receive_id) {
        let data = {
            toId: receive_id,
            fromId: agentId,
            page: 0
        };
        $.post('/admin/chat/messages' ,data, function (data) {
            console.log(data);

            data.messages.forEach(function (item) {
                if(item.fromId === agentId) {
                    addMineMessage(item)
                }
                else if(item.toId === agentId) {
                    addFriendMessage(item);
                }
            })
        });
    }

    function addFriendMessage(data) {
        $('#chat_'+ data.fromId +' .messages .list').append($(
            '<div class="friend">'+
            '   <span class="avatar">'+
            '       <img src="/static/image/avatar/avatar.jpg"/>'+
            '   </span>'+
            '   <span class="bubble">'+
            '       <span class="corner">'+
            '           <span></span>'+
            '       </span>'+
            '       <span class="message">'+ data.content +'</span>'+
            '   </span>'+
            '</div>')
        );
    }


    return {

        render_all_client:function () {
            $.post('/admin/chat/clients', null, function (data) {
                console.log(data);
                $('.friends-list').html('');
                if(data.status === "success"){
                    data.clients.forEach(function (item) {

                        friends[item.id] = item;

                        $('.friends-list').append($(
                            '<div class="friend">' +
                            '   <div class="avatar">' +
                            '       <img src="'+item.avatar+'"/> ' +
                            '   </div>' +
                            '   <div class="username" id="'+item.id+'">'+item.username+'</div>' +
                            '</div>'
                        ));
                    });

                    /**
                     * 注册列表的点击事件
                     * \ 点击弹出聊天窗口
                     */
                    $('.friends-list .friend').click(function () {
                        chatWindow(this);
                    });
                }
            })
        },

        send:function (toId) {

            let to = $(toId).children('.header').children('.user_id').text();
            let text = $(toId + ' .input-area textarea').val();
            if(text === '' || text === '\n' || text === ' '){
                $('.input-area textarea').val('');
                return;
            }

            $('.input-area textarea').val('');

            // console.log('send');
            let data = { fromId: agentId, toId: to, content: text };
            addMineMessage(data);

            socket.send(JSON.stringify(data));
        },
    }
})();