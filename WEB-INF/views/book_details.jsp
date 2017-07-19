<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/19
  Time: 9:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${book.title}</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/book_details/book_details.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/book_details/book_details.js"/>"></script>
</head>
<body>
<div class="page">

    <div class="nav">
        <div class="back">
            <img src="<c:url value="/static/image/icons/back.png"/>">
        </div>
        <div class="menu">
            <ul>
                <li class="main selected">商品</li>
                <li class="details">详情</li>
                <li class="review">评论</li>
            </ul>
        </div>
        <div class="others">
            <div class="more">
                <a href="#"><img src="<c:url value="/static/image/icons/others.png"/>"></a>
                <div class="second-menu" style="display: none">
                    <div class=""></div>
                    <ul>
                        <li><a href="/messages"><span><img src="<c:url value="/static/image/icons/messages.png"/>"></span><span>消息</span></a> </li>
                        <li><a href="/home"><span><img src="<c:url value="/static/image/icons/home.png"/>"></span><span>首页</span></a></li>
                        <li><a href="/"><span><img src="<c:url value="/static/image/icons/like.png"/>"></span><span>我的关注</span></a></li>
                        <li><a href="/"><span><img src="<c:url value="/static/image/icons/messages.png"/>"></span><span>浏览记录</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="share">
                <a href="#"><img src="<c:url value="/static/image/icons/share.png"/>"></a>
            </div>
        </div>
    </div>

    <%-- 商品界面 --%>
    <div id="book" class="show">
        <div class="main">
            <div class="images">
                <img src="${book.cover}">
            </div>
            <div class="title">${book.title}</div>
            <div class="author">作者: ${book.author}</div>
            <div class="publisher">出版社: ${book.publisher}</div>
            <div class="pubdate">出版时间: ${book.pubdate}</div>
            <div class="price">${book.price}</div>
        </div>

        <%-- 详情 --%>
        <div class="summary">
            <div class="content">
                ${book.summary}
            </div>
            <div class="more"><img src="<c:url value="/static/image/icons/down.png"/>"></div>
        </div>

        <%-- 评论 --%>
        <div class="review">
            <div class="title">
                商品评论
            </div>

        </div>
    </div>


    <div id = "details" style="display: none">
        <div><span>书名</span><span>${book.title}</span></div>
        <div><span>ISBN</span><span>${book.ISBN}</span></div>
        <div><span>作者</span><span>${book.author}</span></div>
        <div><span>出版社</span><span>${book.publisher}</span></div>
        <div><span>出版日期</span><span>${book.pubdate}</span></div>
    </div>

    <div id="review" style="display: none">
    评论
    </div>

</div>
</body>
<footer>
    <div class="box">
        <div class="collect">
            <a href="#">
                <div class="icon"><img src="<c:url value="/static/image/icons/like.png"/>"></div>
                <div class="title">关注</div>
            </a>
        </div>
        <div class="cart">
            <a href="<c:url value="/shopping_cart"/>">
                <div class="icon"><img src="<c:url value="/static/image/icons/cart.png"/>"></div>
                <div class="title">购物车</div>
            </a>
        </div>

        <div class="add_to_bookrack">
            <a href="#">加入书架</a>
        </div>

        <div class="add_to_cart">
            <a href="#">
                加入购物车
            </a>
        </div>
    </div>
</footer>
</html>
