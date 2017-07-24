<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/22
  Time: 9:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>订单</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/order/order.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/order/order.js"/>"></script>
</head>
<body class="body">
<div class="page">
    <section id="address">
        <div class="details">
            <div class="info"><span class="username">张量奇</span> <span class="tel">15524439489</span></div>
            <div class="address">dafasd激发我微积分文件访问飞机</div>
        </div>
        <div class="fa fa-angle-right"></div>
    </section>

    <section id="books">
        <div id="book-template" style="display: none">
            <div class="order">
                <img src="{{cover}}">
            </div>
        </div>
    </section>

    <section id="invoice">

    </section>

    <section id="event">

    </section>

    <section id="money">

    </section>
</div>
</body>
<footer>
    <div>
        实付款: <span id="price"></span>
    </div>
    <div id="pay" onclick="SLOWER.order.pay(${orderId});">
        立即下单
    </div>
</footer>
</html>
