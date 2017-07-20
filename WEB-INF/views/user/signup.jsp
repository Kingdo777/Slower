<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/19
  Time: 16:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SIGN UP</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/user/login.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/user/login.js"/>"></script>
</head>
<body>
<div class="page">
    <div id="signup">
        <div class="title">书捞儿</div>
        <input placeholder="用户名" class="username" name="username" type="text">
        <input placeholder="输入密码" class="password" name="password" type="password">
        <input placeholder="确认密码" class="password-repeat" name="password" type="password">

        <div class="submit">注册</div>
        <div class="notice">已经注册过? <a href="<c:url value="/user/login_page"/>">立即登录 ></a></div>
    </div>
</div>
</body>
</html>
