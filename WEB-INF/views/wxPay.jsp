<%--suppress JSAnnotator --%>
<%--
  Created by IntelliJ IDEA.
  User: kingdo
  Date: 7/20/17
  Time: 9:55 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>书捞收银台</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/wechat/wxpay.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/sha1.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/until/random.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/wechat/wechat.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/wechat/wxpay.js"/>"></script>
</head>
<body>
<div class="top_tip text-info row">
    <div style="padding: 0">
        <h3 style="text-align: center;line-height: 50px;margin: 0">
            支付信息
        </h3>
    </div>
</div>
<div style="margin: 10px 10px 0 10px;border-bottom: solid #EEEEEE 1px">
    <h4 style="text-align: center">书捞儿，你身边的图书馆</h4>
    <h1 style="text-align: center">￥${money}</h1>
</div>
<div class="info" style="margin: 0 10px;border-bottom: solid #EEEEEE 1px">
    <h4 style="color: #cccccc;float: left">交易方式</h4>
    <h4 style="color: #cccccc;float: right">微信支付</h4>
    <div style="clear: both"></div>

    <h4 style="color: #cccccc;float: left">交易金额</h4>
    <h4 style="color: #cccccc;float: right">${money} 人民币</h4>
    <div style="clear: both"></div>

    <h4 style="color: #cccccc;float: left">交易事件</h4>
    <h4 style="color: #cccccc;float: right">书籍购买</h4>
    <div style="clear: both"></div>

    <h4 style="color: #cccccc;float: left">交易时间</h4>
    <h4 style="color: #cccccc;float: right">${time}</h4>
    <div style="clear: both"></div>

    <h4 style="color: #cccccc;float: left">交易单号</h4>
    <h4 style="color: #cccccc;float: right" id="oddNumber">${oddNumber}</h4>
    <div style="clear: both"></div>
</div>
<br>
<br>
<div class="pay">
    <button id="pay" class="payBtn" onclick="wxpay(${money},'${oddNumber}');">微信支付</button>
</div>
</body>
<%--<%@include file="component/footer.jsp"%>--%>
</html>
