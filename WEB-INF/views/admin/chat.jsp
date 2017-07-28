<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/28
  Time: 9:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>客服</title>
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/admin/chat/chat.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/admin/chat/chat.js"/>"></script>
</head>
<script>
    let agentId = ${admin.id};
</script>
<body>

<div class="page">

    <div class="client-list">

        <div class="menu">
            <div id="least">最近联系</div>
            <div id="friends">我的关注</div>
        </div>

        <div class="list">
            <div class="least-list" >
            </div>

            <%-- 好友(关注列表) --%>
            <div class="friends-list" style="display: none">
            </div>
        </div>

        <div class="setting">
            <a href="/message/setting"><i class="fa fa-cog"></i></a>
        </div>
    </div>

    <div id="chat-window-template" style="display: none">
        <section class="chat-window" id="chat_{{id}}">
            <div class="header">
                <div class="avatar">
                    <img src="{{ avatar }}"/>
                </div>
                <div class="username">{{ username }}</div>
                <div class="user_id" style="display: none">{{ to_id }}</div>
                <div class="close">
                    <i class="fa fa-times"></i>
                </div>
            </div>
            <div class="messages">
                <div class="list"></div>
            </div>

            <div class="input-area">
                <ul class="menu">
                    <li><i class="fa fa-smile-o"></i></li>
                </ul>
                <div class="input">
                    <textarea title=""></textarea>
                </div>

                <div class="operations">
                    <button class="send fs-button">发送</button>
                    <button class="close fs-button">关闭</button>
                </div>
            </div>
        </section>
    </div>
</div>

</body>
</html>
