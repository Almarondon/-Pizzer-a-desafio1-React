import {
  ListGroup,
  Container,
  Image,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

const Cart = () => {
  const { token } = useContext(UserContext);

  const { cart, add, remove } = useContext(CartContext);

  const increaseQuantity = (c) => {
    add(c);
  };

  const decreaseQuantity = (c) => {
    remove(c);
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
            {cart.products.map((c) => (
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
                      {c.qty}
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
          <h4>Total: $ {cart.total}</h4>
          <Button
            disabled={token === false}
            style={{ marginBottom: "20px" }}
            variant="dark"
          >
            Pagar
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Cart;
