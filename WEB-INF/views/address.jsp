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
    <title>管理收获地址</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/address/address.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/address/address.js"/>"></script>
</head>
<body>
<header>
    <div class="left fa fa-angle-left" id="back"></div>
    <div class="middle">收货地址设置</div>
    <div class="right fa fa-ellipsis-h"></div>
</header>
<div class="page">
    <section id="address-list">
        <c:forEach items="${addresses}" var="address">
            <div class="address-info">
                <div class="address">
                    <div class="up">
                        <div class="user">
                            <span>${address.receiverName}</span>
                        </div>
                        <div class="tel">
                            <span>${address.tel}</span>
                        </div>
                        <div style="clear: both"></div>
                    </div>
                    <div class="down">
                        <div class="details">
                            <span>${address.details}</span>
                        </div>
                    </div>
                </div>
                <div class="operate">
                    <div class="default">
                        <div class="default-icon">
                            <c:choose>
                                <c:when test="${defaultAddressId==address.id}">
                                    <img src="<c:url value="/static/image/icons/Select.png" />">
                                </c:when>
                                <c:otherwise>
                                    <img src="<c:url value="/static/image/icons/unselect.png" />">
                                </c:otherwise>
                            </c:choose>
                        </div>
                        <a href="/address/setDefaultAddress/${address.id}">
                            <div class="default-text <c:if test="${defaultAddressId==address.id}">select</c:if>">
                            <span>
                                <c:choose>
                                    <c:when test="${defaultAddressId==address.id}">
                                        默认地址
                                    </c:when>
                                    <c:otherwise>
                                        设为默认地址
                                    </c:otherwise>
                                </c:choose>
                            </span>
                            </div>
                        </a>
                    </div>
                    <div class="update">
                        <a href="<c:url value="/address/newOrEditPage/${address.id}"/>">
                            <div class="edit">
                                <img src="<c:url value="/static/image/icons/edit.png" />">
                                <span>编辑</span>
                            </div>
                        </a>
                        <a href="/address/deleteAddress/${address.id}">
                            <div class="delete">
                                <img src="<c:url value="/static/image/icons/delete.png" />">
                                <span>删除</span>
                            </div>
                        </a>
                    </div>
                    <div style="clear: both"></div>
                </div>
            </div>
        </c:forEach>
    </section>
</div>
<a href="<c:url value="/address/newOrEditPage/-1"/>">
    <div class="new-address">
        <span>增加新地址</span>
    </div>
</a>
</body>
</html>
