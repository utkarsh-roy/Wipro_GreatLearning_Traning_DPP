<%-- find sum of 5 number and display sum , in JSP --%>





<%@ page language="java" %>

<html>
<head>
    <title>Sum of 5 Numbers</title>
</head>
<body>

<h2>Sum of 5 Numbers</h2>

<%
    int n1 = 5;
    int n2 = 7;
    int n3 = 33;
    int n4 = 20;
    int n5 = 6;

    int sum = n1 + n2 + n3 + n4 + n5;
%>

<p>Numbers are: <%= n1 %>, <%= n2 %>, <%= n3 %>, <%= n4 %>, <%= n5 %></p>

<h3>Total Sum = <%= sum %></h3>

</body>
</html>

