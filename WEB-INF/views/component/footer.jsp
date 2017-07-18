<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/17
  Time: 10:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/footer/footer.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/component/footer/footer.js"/>"></script>
</head>
<footer>
    <ul class="nav">
        <li class="home">
            <a href="<c:url value="/home"/>">
                <span class="icon"><img src="<c:url value="/static/image/icons/home.png"/>"></span>
                <span class="title">首页</span>
            </a>
        </li>
        <li class="classic">
            <a href="<c:url value="/classic"/>">
                <span class="icon"><img src="<c:url value="/static/image/icons/classic.png"/>"></span>
                <span class="title">分类</span>
            </a>
        </li>
        <li class="bookrack">
            <a href="<c:url value="/bookrack"/>">
                <span class="icon"><img src="<c:url value="/static/image/icons/bookrack.png"/>"></span>
                <span class="title">书架</span>
            </a>
        </li>
        <li class="shopping-cart">
            <a href="<c:url value="/shopping_cart"/>">
                <span class="icon"><img src="<c:url value="/static/image/icons/cart.png"/>"></span>
                <span class="title">购物车</span>
            </a>
        </li>
        <li class="user-home">
            <a href="<c:url value="/user"/>">
                <span class="icon"><img src="<c:url value="/static/image/icons/my.png"/>"></span>
                <span class="title">我的</span>
            </a>
        </li>
    </ul>
</footer>
