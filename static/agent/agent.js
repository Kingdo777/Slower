$(document).ready(function () {

    $('#back').click(function () {
        window.location.href =  document.referrer;
    });

    $('#input').bind('input propertychange', function () {
        if($(this).val().length){
            $('#send > div').css({'background-color': 'rgb(224, 98, 13)'});
        }
    });

    $('#send').click(function () {
        SLOWER.agent.send();
    })
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.agent = (function () {

    function add_user_message(message) {
        $('#user-template').tmpl({message:message}).appendTo('.page');
    }

    function add_agent_message(message) {
        $('#agent-template').tmpl({message:message}).appendTo('.page');
    }
    return {
        send: function () {
            let message = $('#input').val();
            $('#input').val('');

            add_user_message(message);
        }
    }
})();