<%@ page language="java" %>

<%
    String user = (String) session.getAttribute("username");

    if(user == null) {
        response.sendRedirect("login.jsp");
    }
%>

<html>
<head>
    <title>Home Page</title>
</head>
<body>

<h2>Welcome <%= user %> Hurray!</h2>

<p>This is Home Page</p>

<a href="logout.jsp">Logout</a>

</body>
</html>

