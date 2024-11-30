import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { UserContextProvider } from "./contexts/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </StrictMode>
);
