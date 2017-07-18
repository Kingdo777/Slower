<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/17
  Time: 8:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/user/home.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/user/home.js"/>"></script>
</head>
<body>
<div class="page">

    <%-- 展示用户信息 --%>
    <div class="user-info">
        <ul class="operations">
            <li><a href="#"><img src="<c:url value="/static/image/icons/settings.png"/>" alt=""></a></li>
            <li><a href="#"><img src="<c:url value="/static/image/icons/messages.png"/>" alt=""></a></li>
        </ul>

        <div class="details">
            <div class="avatar">
                <img src="<c:url value="/static/image/avatar/avatar.jpg"/>">
            </div>
            <div class="username">幻世</div>
        </div>
    </div>

    <%-- 我的订单--%>
    <div class="order">
        <div class="title">
            <span>我的订单</span>
            <span class="all-orders"><a href="#">查看全部订单<i class="fa fa-angle-right"></i></a> </span>
        </div>

        <div class="status">
            <ul>
                <li>
                    <a href="#">
                        <div><img src="<c:url value="/static/image/icons/pay_fill.png"/>"></div>
                        <div>待付款</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div><img src="<c:url value="/static/image/icons/deliver_fill.png"/>"></div>
                        <div>待收货</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div><img src="<c:url value="/static/image/icons/mark_fill.png"/>"></div>
                        <div>待评论</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div><img src="<c:url value="/static/image/icons/repair_fill.png"/>"></div>
                        <div>退款/售后</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <%-- 我的工具 --%>
    <div class="tools">
        <div class="title">
            我的工具
        </div>
        <ul>
            <li>
                <a href="#">
                    <div><img src="<c:url value="/static/image/icons/favor_fill.png"/>"></div>
                    <div>收藏</div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div><img src="<c:url value="/static/image/icons/shop_fill.png"/>"></div>
                    <div>店铺</div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div><img src="<c:url value="/static/image/icons/attention_favor_fill.png"/>"></div>
                    <div>浏览历史</div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div><img src="<c:url value="/static/image/icons/service_fill.png"/>"></div>
                    <div>客服</div>
                </a>
            </li>
        </ul>
    </div>

    <%-- 推荐 --%>
    <div>
        下面是推荐
    </div>
</div>
</body>
<%@include file="../component/footer.jsp"%>
</html>
