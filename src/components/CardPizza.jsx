import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Stack } from "react-bootstrap";

const CardPizza = (props) => {
  const { name, price, ingredients, img } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Stack gap={2} className="col-md-4 mx-auto">
            <h6>Ingredientes</h6>
          </Stack>
          🍕 {ingredients.join(", ")}
        </ListGroup.Item>
        <ListGroup.Item>
          <Stack gap={2} className="col-md-6 mx-auto">
            <h5> Precio: $ {price.toLocaleString("es-CL")}</h5>
          </Stack>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <Button variant="outline-dark" href="#">
            Ver Mas 👀
          </Button>
          <Button className="ms-auto" variant="dark" href="#">
            Añadir 🛒
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
