import { useContext, useState } from "react";
import "./register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/UserContext";

const Register = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  const esEmailValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const clickEnviar = (e) => {
    e.preventDefault();

    if (email == "" || password == "" || confirmarPassword == "") {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios",
        icon: "error",
      });
      return;
    }
    if (!esEmailValido(email)) {
      Swal.fire({
        title: "Error!",
        text: "El formato del email no es válido",
        icon: "error",
      });

      return;
    }

    if (password !== confirmarPassword) {
      Swal.fire({
        title: "Error!",
        text: "El password no coincide",
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

    register(email, password)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Registro exitoso!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Ha ocurrido un error al registrarse",
          icon: "error",
        });
      });
  };

  return (
    <>
      <h3 id="register">Formulario de Registro</h3>
      <div className="form-1">
        <Form onSubmit={clickEnviar}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
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
          <Form.Group className="mb-3" controlId="formBasicConfirmarPassword">
            <Form.Label>Confirmar Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar Password"
              onChange={(e) => setConfirmarPassword(e.target.value)}
            />
          </Form.Group>
          <Button style={{ marginBottom: "20px" }} variant="dark" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
