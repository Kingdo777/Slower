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
    <title>bookrack</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/bookrack/bookrack.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/bookrack/bookrack.js"/>"></script>
</head>
<body>
<div class="page">
    <div class="search">
        <div class="box">
            <div class="icon"><img src="<c:url value="/static/image/icons/search.png"/>"></div>
            <input placeholder="搜索作者、书名">
        </div>
    </div>

    <div class="main">
        <div id="bookrack">
            <div id="bookrack-item-template" style="display: none;">
                <div class="bookrack-book">
                    <a href="#">
                        <div class="cover">
                            <img src="{{cover}}">
                        </div>
                        <div class="title">{{title}}</div>
                        <div class="read-percent">已读 {{ percent }}%</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<%@include file="component/footer.jsp"%>
</html>
