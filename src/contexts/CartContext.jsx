import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    total: 0,
    products: [],
  });

  const add = (pizza) => {
    const productsQty = [...cart.products];
    let total = 0;

    const indexPizza = productsQty.findIndex((p) => p.id === pizza.id);
    const pizzaFounded = indexPizza !== -1;

    if (pizzaFounded) {
      const currentPizza = productsQty[indexPizza];
      currentPizza.qty += 1;
    } else {
      productsQty.push({
        ...pizza,
        qty: 1,
      });
    }

    for (const product of productsQty) {
      total += product.price * product.qty;
    }

    setCart({
      total,
      products: productsQty,
    });
  };

  const checkout = async (cart, token) => {
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("Content-Type", "application/json");

    var raw = JSON.stringify(cart);

    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };

    const response = await fetch(
      "http://localhost:5500/api/checkouts",
      requestOptions
    );

    const result = await response.json();

    if (response.status === 200) {
      return result;
    }

    throw new Error(result);
  };

  const remove = (pizza) => {
    const productsQty = [...cart.products];
    let total = 0;

    const indexPizza = productsQty.findIndex((p) => p.id === pizza.id);
    const currentPizza = productsQty[indexPizza];

    currentPizza.qty -= 1;

    for (const product of productsQty) {
      total += product.price * product.qty;
    }

    setCart({
      total,
      products: productsQty.filter((product) => product.qty > 0),
    });
  };

  return (
    <CartContext.Provider value={{ cart, add, remove, checkout }}>
      {children}
    </CartContext.Provider>
  );
};
