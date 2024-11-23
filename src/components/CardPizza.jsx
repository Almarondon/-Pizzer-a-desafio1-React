import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Stack } from "react-bootstrap";

const CardPizza = (props) => {
  const { name, price = 0, ingredients = [], img, onClickAdd } = props;
  return (
    <Card
      style={{
        margin: 10,
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Stack gap={2} className="col-md-4 mx-auto">
            <h6> 🍕 Ingredientes</h6>
          </Stack>

          <ul
            style={{
              listStyleType: "none",
            }}
          >
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <Stack gap={2} className="col-md-6 mx-auto">
            <h5> Precio: $ {price.toLocaleString("es-CL")}</h5>
          </Stack>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <Button variant="outline-dark">Ver Mas 👀</Button>
          <Button className="ms-auto" onClick={onClickAdd} variant="dark">
            Añadir 🛒
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
