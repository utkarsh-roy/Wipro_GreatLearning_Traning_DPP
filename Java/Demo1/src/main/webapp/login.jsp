<%@ page language="java" %>

<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>Login</h2>

<form action="LoginServlet" method="post">
    Username: <input type="text" name="username"><br><br>
    Password: <input type="password" name="password"><br><br>
    <input type="submit" value="Login">
</form>


<%
    if(request.getMethod().equals("POST")) {

        String user = request.getParameter("username");
        String pass = request.getParameter("password");

       
        if(user.equals("admin") && pass.equals("1234")) {

            session.setAttribute("username", user);
            response.sendRedirect("homepage.jsp");

        } else {
%>
            <h3>Invalid Username or Password</h3>
<%
        }
    }
%>

</body>
</html>
