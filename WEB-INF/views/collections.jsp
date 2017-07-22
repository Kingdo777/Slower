<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/22
  Time: 9:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>关注</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/collections/collections.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/collections/collections.js"/>"></script>
</head>
<body class="body">
<div class="page">

    <div class="collections">
        <div id="collection-template" style="display: none;">
            <div class="collection">
                <div class="cover">
                    <a href="/book/details/{{id}}"><img src="{{cover}}"></a>
                </div>

                <div class="details">
                    <div class="title">
                        <a href="/book/details/{{id}}">{{title}}</a>
                    </div>
                    <div class="price">
                        {{price}}
                    </div>

                    <div class="others">
                        <span class="similar"><a href="#">看相似</a> </span>
                        <span class="add-cart"><img src="<c:url value="/static/image/icons/cart.png"/>"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</body>
</html>
