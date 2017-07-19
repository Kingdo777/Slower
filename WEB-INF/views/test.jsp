<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: kingdo
  Date: 7/19/17
  Time: 4:42 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Title</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/sha1.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/random.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/wechat/wechat.js"/>"></script>
</head>
<body>
<button onclick="scanQRCode()">嫂嫂</button>
</body>
</html>
