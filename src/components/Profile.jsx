import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <div
      style={{
        height: "82.5vh",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <p>{token.email}</p>
      <Button
        style={{ marginBottom: "20px" }}
        onClick={() => logout()}
        variant="dark"
        type="submit"
      >
        Cerrar sesión
      </Button>
    </div>
  );
};

export default Profile;
