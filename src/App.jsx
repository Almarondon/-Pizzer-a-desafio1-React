import "./App.css";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/register/Register";
import Pizza from "./pages/pizza/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

const App = () => {
  const { token } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token === false ? <Navigate to="/login" /> : <Profile />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
