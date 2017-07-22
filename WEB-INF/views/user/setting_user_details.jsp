<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/20
  Time: 13:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>个人资料设置</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/user/setting.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/user/setting.js"/>"></script>
</head>
<body class="body">
<div id="user_details">
    <div class="avatar">
        <img src="${host.avatar}">
    </div>

    <div class="details">
        <div><a href="/user/setting/username"><span class="title">昵称</span><span class="content">${host.username}</span><span class="fa fa-angle-right"></span></a> </div>
        <div><a href="/user/setting/sex"><span class="title">性别</span><span class="content"><c:if test="${host.sex == true}">男</c:if><c:if test="${host.sex == false}">女</c:if> </span><span class="fa fa-angle-right"></span></a> </div>
        <div><a href="/user/setting/email"><span class="title">邮箱</span><span class="content">${host.email}</span><span class="fa fa-angle-right"></span></a> </div>
        <div><a href="/user/setting/tel"><span class="title">手机</span><span class="content">${host.tel}</span><span class="fa fa-angle-right"></span></a> </div>
    </div>

    <div class="password"><a href="/user/setting/password"><span class="title">修改密码</span><span class="fa fa-angle-right"></span></a> </div>
</div>
</body>
</html>
