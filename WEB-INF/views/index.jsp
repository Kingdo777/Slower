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
    <title>home</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/index/index.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
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
                    <input placeholder="书名/作者">
                </div>

                <div class="scan-icon">
                    <img src="<c:url value="/static/image/icons/scan.png"/>">
                </div>
            </div>
        </div>
        <div class="messages"><img src="<c:url value="/static/image/icons/messages.png"/>"></div>

    </section>

    <section class="roll-section">

    </section>

    <section class="menu">
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
        </ul>
    </section>

    <section class="menu-2">
        <div class="">

        </div>

        <div class="">

        </div>

        <div class="">

        </div>
    </section>

    <section class="book-list">

    </section>
</div>


</body>
<%@include file="component/footer.jsp"%>
</html>
