import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <>
      <BootstrapNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home">
            ¡Pizzeria Mamma Mia!
          </BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
            {token && <Nav.Link href="#profile">🔓 Profile</Nav.Link>}
            {token && <Nav.Link href="#logout">🔓 Logout</Nav.Link>}
            {!token && <Nav.Link href="#login">🔐 Login</Nav.Link>}
            {!token && <Nav.Link href="#register">🔐 Register</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link href="#total">
              🛒 Total $ {total.toLocaleString("es-CL")}
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;
