<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice
  Date: 2017/5/16
  Time: 17:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>login</title>
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/admin/login/login.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/> "></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/canvas-particle.js"/> "></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/admin/login/login.js"/> "></script>
</head>
<body>

<div class="page">
    <form action="<c:url value="/admin/login"/>" method="POST" class="login-form">
        <div class="login-title">Log In</div>
        <input name="username" type="text" title="Enter your username." placeholder="Username" id="login-username" class="fs-input">
        <input name="password" type="password" title="Enter your password." placeholder="Password" id="login-password" class="fs-input">
        <button type="submit" id="login-button" class="fs-button">LOGIN</button>
    </form>
</div>

</body>
</html>
