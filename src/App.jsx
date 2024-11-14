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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001”" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

/* <Navbar />
        <Home />
        <Pizza />
        <Register />
        <Login />
        <Cart />
        <Footer />*/
