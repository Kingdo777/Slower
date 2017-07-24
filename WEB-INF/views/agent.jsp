<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/23
  Time: 10:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>客服</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/agent/agent.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/agent/agent.js"/>"></script>
</head>
<header>
    <div class="left fa fa-angle-left" id="back"></div>
    <div class="middle"><div><span class="title">客服</span> <span class="status"> </span></div></div>
    <div class="right fa fa-ellipsis-h"></div>
</header>
<body class="body">

<div class="page">
    <div id="user-template" style="display: none">
        <div class="user-message">
            <%--<div class="arrow"></div>--%>
            <div class="content">{{message}}</div>
        </div>
    </div>

    <div id="agent-template" style="display: none">
        <div class="agent-message">
            <%--<div class="arrow"></div>--%>
            <div class="content">{{message}}</div>
        </div>
    </div>
</div>

</body>
<footer>
    <div class="edit-area">
        <div class="input">
            <input id="input" placeholder="输入您要咨询的问题">
        </div>
        <div id="send">
            <div class="fa fa-angle-right"></div>
        </div>
    </div>
</footer>
</html>
