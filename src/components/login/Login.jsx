import { useState } from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickEnviar = (e) => {
    e.preventDefault();

    if (email == "" || password == "") {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios",
        icon: "error",
      });
      return;
    }
    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "la contraseña debe tener 6 caracteres",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Good job!",
      text: "Login exitoso!",
      icon: "success",
    });
  };

  return (
    <>
      <h3>Login</h3>
      <div className="login">
        <Form onSubmit={clickEnviar} id="login">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder=" email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
