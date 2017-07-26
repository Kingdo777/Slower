<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: kingdo
  Date: 7/25/17
  Time: 11:17 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>书籍导入情况报表</title>
    <style>
        table,th,tr,td{
            border: 1px black solid;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
<a href="<c:url value="/admin/main"/>">返回主管理界面</a>
<c:if test="${rightFileFormat}">
    <h4>文件格式:right</h4>
    <h4>申请导入书籍总数：${allNum}本</h4>
    <h4>成功导入书籍总数：${successNum}本(其中增添新书${newNum}种)</h4>
    <h4>失败导入书籍总数：${failedNum}本</h4>
    <c:if test="${failedNum>0}">
        <table>
            <tr>
                <th>失败书籍ISBN</th>
                <th>失败原因</th>
            </tr>
            <c:forEach items="${failedReason}" var="failed">
                <tr>
                    <td>${failed.key}</td>
                    <td>${failed.value}</td>
                </tr>
            </c:forEach>
        </table>
    </c:if>
</c:if>
<c:if test="${!rightFileFormat}">
    <h4>文件格式:wrong</h4>
</c:if>

</body>
</html>
