import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
import Register from "./components/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Register />
      <Login />
      <Footer />
    </>
  );
}

export default App;
