import {
  ListGroup,
  Container,
  Image,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { pizzasCart } from "../data/pizzas";
import { useState } from "react";

const Cart = () => {
  const calcularTotal = (items) => {
    let accumulator = 0;

    for (const item of items) {
      const operation = item.price * item.quantity;
      accumulator = accumulator + operation;
    }

    return accumulator;
  };

  const [cart, setCart] = useState(pizzasCart);
  const [total, setTotal] = useState(calcularTotal(pizzasCart));

  const increaseQuantity = (c) => {
    const resultado = cart.map((item) => {
      if (item.name === c.name) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    setCart(resultado);
    const total = calcularTotal(cart);
    setTotal(total);
  };

  const decreaseQuantity = (c) => {
    const resultado = cart.map((item) => {
      if (item.name === c.name) {
        item.quantity -= 1;
        return item;
      }
      return item;
    });
    setCart(resultado.filter((r) => r.quantity > 0));
    const total = calcularTotal(cart);
    setTotal(total);
  };

  return (
    <Container fluid="md">
      <Card
        style={{
          margin: 10,
        }}
      >
        <Card.Header>
          <h3>Detalles del Pedido</h3>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {cart.map((c) => (
              <ListGroup.Item key={c.name}>
                <Row>
                  <Col>
                    <Image width={80} src={c.img} />
                  </Col>
                  <Col>{c.name}</Col>
                  <Col>$ {c.price.toLocaleString("es-CL")}</Col>
                  <Col>
                    <Button
                      onClick={() => increaseQuantity(c)}
                      variant="outline-success"
                    >
                      +
                    </Button>
                    <label
                      style={{
                        margin: 10,
                      }}
                    >
                      {c.quantity}
                    </label>
                    <Button
                      onClick={() => decreaseQuantity(c)}
                      variant="outline-danger"
                    >
                      -
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <h4>Total: $ {total}</h4>
          <Button style={{ marginBottom: "20px" }} variant="dark">
            Pagar
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Cart;
