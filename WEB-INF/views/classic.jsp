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
    <title>classic</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/classic/classic.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/scrollTo.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/classic/classic.js"/>"></script>
</head>
<body>
<div class="head">
    <div class="page">
        <div class="search">
            <div class="box">
                <div class="icon"><img src="<c:url value="/static/image/icons/search.png"/>"></div>
                <input placeholder="搜索作者、书名">
            </div>
        </div>
    </div>
    <ul>
        <li><a href="#category1" class="categoryHead select">女生</a></li>
        <li><a href="#category2" class="categoryHead">男生</a></li>
        <li><a href="#category3" class="categoryHead">漫话</a></li>
        <li><a href="#category4" class="categoryHead">图书</a></li>
    </ul>
</div>

<div class="category">
    <c:forEach items="${firstCategories}" var="first" >
        <section id="category${first.id}">
            <div style="clear: both"></div>
            <div class="firstCategory">
                <img src="<c:url value="/static/image/class/first/${first.name}.png" />">
            </div>
            <div style="clear: both"></div>
            <div class="secondCategories">
                <ul>
                    <c:forEach items="${secondCategories.get(first.id)}" var="second">
                        <li>
                            <a href="<c:url value="/list/showInfo?secondCategoryID=${second.id}" />">
                                <img src="<c:url value="/static/image/class/second/${second.name}.png" />">
                            </a>
                        </li>
                    </c:forEach>
                </ul>
            </div>
            <div style="clear: both"></div>
        </section>
    </c:forEach>
    <div style="clear: both"></div>
</div>
</body>
<%@include file="component/footer.jsp"%>
</html>
