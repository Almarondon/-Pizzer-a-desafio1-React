import "./App.css";
// import Cart from "./components/Cart";
import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
// import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
// import Register from "./components/register/Register";
import Pizza from "./components/pizza/Pizza";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Pizza />
      {/* <Register /> */}
      {/* <Login />  */}
      {/* <Cart /> */}
      <Footer />
    </>
  );
}

export default App;
