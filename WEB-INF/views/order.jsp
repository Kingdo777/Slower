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
<header>
    <div class="left fa fa-angle-left" id="back"></div>
    <div class="middle">确认订单</div>
    <div class="right fa fa-ellipsis-h"></div>
</header>
<div class="page">
    <section id="address">
        <a href="<c:url value="/address/show"/>">
            <div class="details">
                <c:if test="${hasDefault}">
                    <div class="info"><span class="username">${address.receiverName}</span> <span class="tel">15524439489</span></div>
                    <div class="address">${address.details}</div>
                </c:if>
                <c:if test="${!hasDefault}">
                    <h5 style="margin: 5px">未设置地址</h5>
                </c:if>
            </div>
            <div class="fa fa-angle-right"></div>
        </a>
    </section>

    <section id="books">
        <div id="book-template" style="display: none">
            <div class="order">
                <img src="{{cover}}">
            </div>
        </div>
    </section>

    <section id="invoice">
        <div class="user-details"><a href="#"><span>发票</span><span class="fa fa-angle-right"></span></a></div>
    </section>

    <section id="event">
            <div class="user-details"><a href="#"><span>优惠券</span><span class="fa fa-angle-right"></span></a></div>
    </section>

    <section id="notice">
        <textarea title="" placeholder="给商家留言"></textarea>
    </section>

    <section id="money">
            <div class="user-details"><span>商品金额</span><span id="price"></span></div>
            <div class="address"><span>运费</span><span class="freight">¥ 0.00</span></div>
    </section>
</div>
</body>
<footer>
    <div>
        实付款: <span id="all-price"></span>
    </div>
    <div id="${hasDefault?"pay":"setAddress"}" content="${hasDefault?address.id:-1}">
        立即下单
    </div>
</footer>
</html>
