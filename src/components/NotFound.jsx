import { Link } from "react-router-dom";
import imagen404 from "../assets/images/error-404.png";

const NotFound = () => {
  return (
    <div>
      <Link to={"/home"}>
        <img src={imagen404} alt="" />
        <h3>Volver a la página principal</h3>
      </Link>
    </div>
  );
};

export default NotFound;
