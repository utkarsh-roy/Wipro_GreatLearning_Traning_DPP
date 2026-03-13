
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if("admin".equals(username) && "1234".equals(password)) {

            HttpSession session = request.getSession();
            session.setAttribute("user", username);

            request.getRequestDispatcher("/homepage.jsp")
                   .forward(request, response);

        } else {
            response.getWriter().println("Invalid Login");
        }
    }
}
