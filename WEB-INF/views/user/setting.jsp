<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/17
  Time: 11:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>设置</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/user/setting.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/user/setting.js"/>"></script>
</head>
<body class="body">
<div id="main">
    <div class="basic">
        <div class="title">基本</div>
        <div class="content">
            <div class="user-details"><a href="<c:url value="/user/setting/user_details"/>"><span>个人资料设置</span><span class="fa fa-angle-right"></span></a></div>
            <div class="address"><a href="<c:url value="/user/setting/address"/>"><span>收货地址设置</span><span class="fa fa-angle-right"></span></a></div>
        </div>
    </div>

    <div class="others">
        <div class="title">其他</div>
        <div class="content">
            <div class="user-details"><a href="<c:url value="/user/setting/about"/>"><span>关于书捞儿</span><span class="fa fa-angle-right"></span></a></div>
        </div>
    </div>

    <div class="logout">退出当前账号</div>
</div>
</body>
</html>
