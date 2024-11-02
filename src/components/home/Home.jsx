import { Col, Container, Row, Stack } from "react-bootstrap";
import Header from "../header/Header";
import "./home.css";
import CardPizza from "../CardPizza";
import { pizzas } from "../../data/pizzas";

const Home = () => {
  return (
    <div className="home">
      <Stack gap={4}>
        <Header />
        <Container fluid="md">
          <Row>
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <CardPizza {...pizza} />
              </Col>
            ))}
          </Row>
        </Container>
      </Stack>
    </div>
  );
};

export default Home;
