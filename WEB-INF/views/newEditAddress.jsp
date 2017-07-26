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
    <title>新地址</title>
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
    <div class="left fa fa-angle-left" id="new-address-back"></div>
    <div class="middle">收货地址设置</div>
    <div class="right fa fa-ellipsis-h"></div>
</header>
<div class="page">
    <form method="post" action="${type?"/address/update":"/address/new"}">
        <div class="info">
            <div class="receiverName input-info">
                <div class="input-span">
                    <span>收货人</span>
                </div>
                <div class="input-box">
                    <input required type="text" name="receiverName" title="收货人" id="receiverName" value="${type?address.receiverName:""}">
                </div>
            </div>
            <div class="tel input-info">
                <div class="input-span">
                    <span>联系电话</span>
                </div>
                <div class="input-box">
                    <input required type="telephone" name="tel" title="联系电话" value="${type?address.tel:""}">
                </div>
            </div>
            <div class="province input-info">
                <div class="input-span">
                    <span>省份</span>
                </div>
                <div class="input-box">
                    <select required class="province-select" title="省份">
                        <option class="city-item" disabled selected></option>
                        <%--此option使用class="city-item"没有任何问题，当省份改变此项就没有价值了--%>
                        <c:forEach items="${provinces}" var="province">
                            <option class="province-item" value="${province.get("id")}">${province.get("name")}</option>
                        </c:forEach>
                    </select>
                </div>
            </div>
            <div class="city input-info">
                <div class="input-span">
                    <span>城市</span>
                </div>
                <div class="input-box">
                    <select required name="city_id" class="city-select" title="城市">
                        <option class="city-item" disabled selected>
                            请先选择省份
                        </option>
                    </select>
                </div>
            </div>
            <div class="detail">
                <textarea required placeholder="详细地址" title="详细地址" id="detailText" name="details">${type?address.details:""}</textarea>
            </div>
            <div class="if-default">
                <div class="input-span">
                    <span>设为默认</span>
                </div>
                <div class="input-box">
                    <input type="checkbox" title="" name="ifDefault" value="true">
                </div>
            </div>
        </div>
        <c:if test="${type}">
            <input type="text" name="address_id" value="${address.id}" style="display: none" title="">
        </c:if>
        <div class="submit-btn">保存</div>
    </form>
</div>
</body>
</html>
