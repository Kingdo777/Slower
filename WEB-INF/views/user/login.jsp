<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/19
  Time: 16:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>LOG IN</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/user/login.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/user/login.js"/>"></script>
</head>
<body>
<div class="page">
    <div id="login">
        <div class="title">书捞儿</div>
        <input placeholder="用户名" class="username" name="username" type="text">
        <input placeholder="密码" class="password" name="password" type="password">

        <div class="submit">登录</div>
        <div class="notice">没有账号? <a href="<c:url value="/user/signup_page"/>">立即注册 ></a></div>
    </div>
</div>
</body>
</html>
