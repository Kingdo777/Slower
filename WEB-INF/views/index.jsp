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
    <title>书捞儿</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/index/index.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/slider.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/sha1.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/random.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/wechat/wechat.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/index/index.js"/>"></script>
</head>
<body>

<div class="page">

    <section class="search-section">

        <div class="classic"><a href="<c:url value="/classic"/>"><img src="<c:url value="/static/image/icons/classic.png"/>"></a> </div>
        <div class="search">

            <div class="body">
                <div class="search-icon">
                    <img src="<c:url value="/static/image/icons/search.png"/>">
                </div>
                <div class="search-input">
                    <input id="search" placeholder="书名/作者">
                </div>

                <div class="scan-icon">
                    <img src="<c:url value="/static/image/icons/scan.png"/>">
                </div>
            </div>
        </div>
        <div class="messages"><a href="<c:url value="/notices/"/>"><img src="<c:url value="/static/image/icons/messages.png"/>"></a></div>

    </section>

    <%-- 滚动区 --%>
    <div id="banner">
        <ul id="main">
            <li>
                <img src="<c:url value="/static/image/index/index1.jpg"/> " />
            </li>
            <li>
                <img src="<c:url value="/static/image/index/index2.jpg"/> " />
            </li>
            <li>
                <img src="<c:url value="/static/image/index/index3.jpg"/> " />
            </li>
            <li>
                <img src="<c:url value="/static/image/index/index4.jpg"/>" />
            </li>
        </ul>
    </div>

    <%-- 大类导航 --%>
    <section class="menu">
        <ul>
            <li>
                <a href="<c:url value="/list/showInfo?secondCategoryID=1" />">
                    <div class="icon"><img src="<c:url value="/static/image/icons/hot.png"/>"> </div>
                    <div class="title">榜单</div>
                </a>
            </li>
            <li>
                <a href="<c:url value="/list/showInfo?secondCategoryID=2" />">
                    <div class="icon"><img src="<c:url value="/static/image/icons/special.png"/>"> </div>
                    <div class="title">专题</div>
                </a>
            </li>
            <li>
                <a href="<c:url value="/list/showInfo?secondCategoryID=3" />">
                    <div class="icon"><img src="<c:url value="/static/image/icons/boy_avatar.png"/>"> </div>
                    <div class="title">男生</div>
                </a>
            </li>
            <li>
                <a href="<c:url value="/list/showInfo?secondCategoryID=4" />">
                    <div class="icon"><img src="<c:url value="/static/image/icons/girl_avatar.png"/>"> </div>
                    <div class="title">女生</div>
                </a>
            </li>
            <li>
                <a href="<c:url value="/list/showInfo?secondCategoryID=5" />">
                    <div class="icon"><img src="<c:url value="/static/image/icons/book_list.png"/>"> </div>
                    <div class="title">书单</div>
                </a>
            </li>
        </ul>
    </section>

    <%-- 大类推荐 --%>
    <section class="menu-2">
        <div class="free">
            <a href="<c:url value="/list/showInfo?secondCategoryID=6" />">
                <div class="title">
                    免费好书
                </div>
                <div class="des">
                    看书，就要划算!
                </div>
                <div class="image">
                    <img src="https://img3.doubanio.com/lpic/s9061102.jpg">
                </div>
            </a>
        </div>

        <div class="new-book">
            <a href="<c:url value="/list/showInfo?secondCategoryID=7" />">
                <div class="title">
                    新书专区
                </div>
                <div class="des">
                    潜力新书，抢先阅读
                </div>
                <div class="image">
                    <img src="https://img1.doubanio.com/lpic/s27284878.jpg">
                </div>
            </a>
        </div>
    </section>

    <section id="book-list">
        <div id="book-template" style="display: none;">
            <div class="book">
                <a href="<c:url value="/book/details/{{id}}"/>">
                    <div class="cover">
                        <img src="{{cover}}">
                    </div>
                    <div class="details">
                        <div class="title">
                            {{title}}
                        </div>
                        <div class="summary">
                            {{summary}}
                        </div>

                        <div class="author">
                            {{author}}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</div>

</body>
<%@include file="component/footer.jsp"%>
</html>
