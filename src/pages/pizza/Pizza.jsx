import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./pizza.css";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState({
    ingredients: [],
  });

  const fetchPizza = async (id) => {
    try {
      const response = await fetch("http://localhost:5500/api/pizzas/" + id);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      alert(
        error,
        "No se pudo conectar con la API. Por favor, intenta de nuevo más tarde."
      );
    }
  };

  useEffect(() => {
    fetchPizza(id);
  }, [id]);

  return (
    <>
      <div className="pizza">
        <div className="image">
          <img src={pizza.img} alt={pizza.img} />
        </div>
        <div className="caract">
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <p>
            {" "}
            Ingredientes:
            <ul
              style={{
                listStyleType: "none",
                fontWeight: "bold",
              }}
            >
              {pizza.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </p>
          <p>Precio: ${pizza.price}</p>
          <Button className="btn" variant="dark" href="#">
            Añadir 🛒
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pizza;
