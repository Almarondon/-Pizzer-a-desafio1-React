import { useContext } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

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
            {token && <Nav.Link onClick={() => logout()}>🔓 Logout</Nav.Link>}
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
                🛒 Total $ {cart.total.toLocaleString("es-CL")}
              </Nav.Link>
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;
