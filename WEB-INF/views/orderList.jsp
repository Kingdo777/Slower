<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/24
  Time: 15:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>我的订单</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/order_list/order_list.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/order_list/order_list.js"/>"></script>
</head>
<header>
    <div class="left fa fa-angle-left" id="back"></div>
    <div class="middle">我的订单</div>
    <div class="right fa fa-ellipsis-h"></div>
</header>
<body class="body">
<div class="page">
    <div class="menu">
        <div id="all">全部</div>
        <div id="unpay">待付款</div>
        <div id="unfilled">未发货</div>
        <div id="receiving">待收货</div>
        <div id="done">已完成</div>
    </div>


    <div id="unpay-template" style="display: none;">
        <div class="order">
            <div class="title">
                <div>等待付款</div>
            </div>
            <div class="covers">

            </div>

            <div class="details">
                实付款：¥ {{price}}
            </div>
            <div class="operations">
                <a href="<c:url value="/wechat/payPage?price={{price}}&orderId={{orderId}}"/>">去支付</a>
            </div>
        </div>
    </div>


    <div id="unfilled-template" style="display: none;">
        <div class="order">
            <div class="title">
                <div>等待出货</div>
            </div>
            <div class="covers">

            </div>

            <div class="details">
                实付款：¥ {{price}}
            </div>
            <%--<div class="operations">--%>
                <%--<a href="<c:url value="/wechat/payPage?price={{price}}&orderId={{orderId}}"/>">去支付</a>--%>
            <%--</div>--%>
        </div>
    </div>
    <div id="list">

    </div>
</div>
</body>
</html>
