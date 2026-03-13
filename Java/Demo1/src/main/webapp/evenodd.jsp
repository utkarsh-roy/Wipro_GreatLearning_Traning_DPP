<%--check if number even or odd? --%>

<%@ page language="java" %>

<html>
<head>
    <title>Even or Odd</title>
</head>
<body>

<h2>Even or Odd Check</h2>

<%
    int num = 25;

    String result;

    if(num % 2 == 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
%>

<p>Number is: <%= num %></p>

<h3>Result: <%= result %></h3>

</body>
</html>
