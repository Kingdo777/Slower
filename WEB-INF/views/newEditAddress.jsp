<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/14
  To change this template use File | Se
  Time: 11:06ttings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>新地址</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/address/address.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/address/address.js"/>"></script>
</head>
<body>

<div class="page">
    <div class="info">
        <div class="receiverName">
            <span>收货人</span>
            <input type="text" name="receiverName" title="收货人" id="receiverName">
        </div>
        <div class="tel">
            <span>联系电话</span>
            <input type="text" name="tel" title="联系电话">

        </div>
        <div class="province">
            <span>省份</span>
            <input type="text" name="province" title="省份">

        </div>
        <div class="city">
            <span>城市</span>
            <input type="text" name="city" title="城市">

        </div>
        <div class="detail">
            <textarea placeholder="详细地址" title="详细地址" id="detailText"></textarea>
        </div>
    </div>
</div>
</body>
</html>
