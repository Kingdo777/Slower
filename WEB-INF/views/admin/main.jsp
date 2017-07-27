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
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/admin/main/main.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/admin/main/pikaday.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/bootstrap/css/bootstrap-theme.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/bootstrap/css/bootstrap.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/bootstrap/css/font-awesome.min.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/bootstrap/js/bootstrap.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/admin/main/main.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/admin/main/pikaday.js"/>"></script>
    <style>
        html,body,.container-fluid,.bottom-content,.left_menu,.content{
            /*height: 100%;*/
            min-height: 100%;
        }
        .top-title{
            padding: 0;
            background-color:#1b6d85;
        }
        .bottom-content{
        }
        .left_menu{
            padding: 5px;
            background-color:#1b6d85;
            /*height: 100%;*/
        }
        .panel-body{
            background-color: #e5eecc;
        }
        .panel-body{
            padding: 0;
        }
        ul{
            padding: 0;
            margin: 0;
        }
        li{
            padding: 5px 25px;
            text-decoration: none;
            border-bottom: solid #e2e2e2 1px;
        }
        .content{
            background-image: url("/static/image/admin/bg.jpg");
            background-size: 100%;
            padding: 0;
        }
        table,tr,td,th{
            border: 1px solid black;
            border-collapse:collapse;
        }
    </style>
</head>
<body>
<div class="container-fluid">
    <div class="top-title row">
        <div class="panel-heading col-xs-3 col-xs-offset-1">
            <a style="text-decoration: none" href="<c:url value="/admin/main"/>"><h3 style="color: #FFFFff;">书捞后台管理系统</h3></a>
        </div>
        <div class="panel-heading col-xs-offset-9">
            <a href="#">
                <h5 style="color: #FFFFff;padding-top: 3%;">
                    <span class="glyphicon glyphicon-share-alt"> 退出登录</span>
                </h5>
            </a>
        </div>
    </div>
    <div class="row bottom-content">
        <div class="left_menu col-xs-2">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <h4 class="panel-title">
                            <a  class="collapsed">
                                图书入库
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            <ul>
                                <li><a class="link-btn" content="book-to-repertory">新书导入</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" >
                                信息查询
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            <ul>
                                <li><a class="link-btn book-info-link" content="book_info">图书信息查询</a></li>
                                <li><a class="link-btn user-info-link" content="user_info">用户信息查询</a></li>
                                <li><a class="link-btn order-info-link" content="order_info">订单信息查询</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h4 class="panel-title">
                            <a class="collapsed" >
                                业务管理
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            <ul>
                                <li><a class="link-btn bill-record-link" content="bill-record">账单汇总</a></li>
                                <li><a class="link-btn book-purchase-order-link" content="book-purchase-order">购书订单</a></li>
                                <li><a class="link-btn customer-service-link" content="customer-service">客服消息</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingFive" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <h4 class="panel-title">
                            <a class="collapsed" >
                                事物日常
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                        <div class="panel-body">
                            <ul>
                                <li><a class="link-btn membership-link" content="membership">会员管理</a></li>
                                <li><a class="link-btn homepage-link" content="homepage">主页管理</a></li>
                                <li><a class="link-btn sort-link" content="sort">分类管理</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content col-xs-10" id="content">
            <div class="content_header">
                <h1 style="z-index: 999;position: absolute;left: 400px" >Welcome To Slower</h1>
            </div>
            <div class="content-body">
                <div class="body-content book-to-repertory" style="display: none">
                    <div class="content_warn_text">
                        <h4 class="text-warning">1、请务必按照模板文件的标准格式上传文件</h4>
                        <h4 class="text-warning">2、除单元格大小以外，不要有任何其他格式上的修改</h4>
                        <h4 class="text-warning">3、为保证上传的高效，每次上传的数据最多限定为100条（超过100的数据将被忽略）</h4>
                        <h4 class="text-warning">4、bookID为书捞内置条形码，sort_id是分类的唯一标志</h4>
                        <h4 class="text-danger">5、请务必保证bookID信息的准确性</h4>
                        <h4 class="text-warning">6、sort_id请参阅网站提供的数据（建议每次都重新下载）</h4>
                    </div>
                    <div class="row">
                        <div class="col-xs-2">
                            <a class="btn btn-warning"  href="<c:url value="/admin/exportSortIdTable"/>">Sort_id参照表</a>
                        </div>
                        <div class="col-xs-2">
                            <a class="btn btn-danger" href="<c:url value="/static/modelFile/model.xls"/>">模板文件</a>
                        </div>
                        <div class="col-xs-3"></div>
                        <div class="col-xs-3">
                            <form enctype="multipart/form-data" method="post" action="<c:url value="/admin/importBook"/>" id="newBook-form">
                                <input type="file" style="display:none"  name="file" id="upload_file">
                                <input type="button" class="btn btn-success"  id="sub_btn" value="上传书单">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="body-content book_info" style="display: none">
                    <div class="info-operate">
                        <div class="row">
                            <div class="col-xs-3">
                                <a class="btn btn-success" id="export_file" href="">导出文件</a>
                            </div>
                            <div class="col-xs-3">
                                <button class="btn btn-info book-info-previous-page" content="all">上一页</button>
                                <button class="btn btn-warning book-info-next-page" content="all">下一页</button>
                            </div>
                            <div class="col-xs-6 sou">
                                <form action="" method="post">
                                    <input class="ISBN-input" type="text" title="ISBN" name="ISBN" placeholder="ISBN">
                                    <input class="author-input" type="text" title="author" name="author" placeholder="author">
                                    <input class="title-input" type="text" title="title" name="title" placeholder="title">
                                    <input class="size-input" type="text" title="title" name="size" placeholder="显示条数" width="10">
                                    <button type="button" class="comprehensive-query-button">图书信息综合查询</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <table class="book-info-table">
                        <tr>
                            <th>ISBN</th>
                            <th>书名</th>
                            <th>作者</th>
                            <th>一级分类</th>
                            <th>二级分类</th>
                            <th>购入数目</th>
                            <th>出售数目</th>
                            <th>库存数目</th>
                        </tr>
                    </table>
                </div>
                <div class="body-content user_info" style="display: none">user_info</div>
                <div class="body-content order_info" style="display: none">
                    <div>
                        <button class="toggle-display-bookInfo" content="0">显示/隐藏图书信息</button>
                        <table class="book-order-table">
                            <tr>
                                <th>订单号</th>
                                <th>用户ID</th>
                                <th>收货昵称</th>
                                <th>联系电话</th>
                                <th>送货地址</th>
                                <th>订单收益</th>
                                <th>下单时间</th>
                                <th>订单状态</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="body-content bill-record" style="display: none">bill-record</div>
                <div class="body-content book-purchase-order" style="display: none">
                    <div>
                        <button class="toggle-display-purchase-bookInfo" content="0">显示/隐藏图书信息</button>
                        <table class="book-purchase-order-table">
                            <tr>
                                <th>订单号</th>
                                <th>用户ID</th>
                                <th>收货昵称</th>
                                <th>联系电话</th>
                                <th>送货地址</th>
                                <th>订单收益</th>
                                <th>下单时间</th>
                                <th>发货确认</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="body-content customer-service" style="display: none">customer-service</div>
                <div class="body-content membership" style="display: none">membership</div>
                <div class="body-content homepage" style="display: none">homepage</div>
                <div class="body-content sort" style="display: none">sort</div>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save_change">保存</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>
