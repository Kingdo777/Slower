<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/17
  Time: 10:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/shopping_cart/shopping_cart.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/shopping_cart/shopping_cart.js"/>"></script>
</head>
<body>
<div class="page">
    <div class="header">购物车</div>

    <%-- 如果购物车是空的 --%>
    <div class="cart-empty">
        <span class="body">
            <span class="icon"><img src="<c:url value="/static/image/icons/cart.png"/>"> </span>
            <span class="title">购物车是空的</span>
        </span>
    </div>

    <%-- 购物车不为空 --%>
    <div class="orders">
        <div id="order-template" style="display: none;">
            <div class="order">
                <div class="select">
                    <img src="/static/image/icons/round_check_fill.png">
                </div>
                <div class="cover">
                    <img src="{{cover}}">
                </div>
                <div class="details">
                    <div class="title">{{title}}</div>
                    <div class="others">
                        <div class="price">{{price}}</div>
                        <div class="number">
                            <div class="sub">-</div>
                            <div class="amount">{{number}}</div>
                            <div class="add">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%-- 推荐 --%>
    <div class="recommend">
        <hr>
        <div class="r-title">猜你喜欢</div>
        <div class="list">
            <div id="recommend-template" style="display: none">
                <div class="book">
                    <a href="/book/details/{{id}}">
                        <div class="cover">
                            <img src="{{cover}}">
                        </div>
                        <div class="title">
                            {{title}}
                        </div>
                        <div class="price">
                            {{price}}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="clearing" style="display: none">
    <div class="select-all">
        <div class="icon">
            <img src="/static/image/icons/round.png">
        </div> <div>全选</div>
    </div>
    <div class="price">
        合计: 123元
    </div>
    <div class="to-clearing">去结算
    </div>
</div>
</body>
<%@include file="component/footer.jsp"%>
</html>
