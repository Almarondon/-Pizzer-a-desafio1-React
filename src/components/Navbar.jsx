import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavLink,
} from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;
  const navigate = useNavigate();

  return (
    <>
      <BootstrapNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand onClick={() => navigate("/")}>
            ¡Pizzeria Mamma Mia!
          </BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>🍕 Home</Nav.Link>
            {token && (
              <Nav.Link onClick={() => navigate("/profile")}>
                🔓 Profile
              </Nav.Link>
            )}
            {token && (
              <Nav.Link onClick={() => navigate("/log")}>🔓 Logout</Nav.Link>
            )}
            {!token && (
              <Nav.Link onClick={() => navigate("/login")}>🔐 Login</Nav.Link>
            )}
            {!token && (
              <Nav.Link onClick={() => navigate("/register")}>
                🔐 Register
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="#total">
              <Nav.Link onClick={() => navigate("/cart")}>
                🛒 Total $ {total.toLocaleString("es-CL")}
              </Nav.Link>
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;
