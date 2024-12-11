import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");

  const logout = () => {
    setToken("");
  };

  const login = async (email, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({ email, password });

    const requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };

    const response = await fetch(
      "http://localhost:5500/api/auth/login",
      requestOptions
    );

    const result = await response.json();

    if (response.status === 200) {
      setToken(result);
      return result;
    }

    throw new Error(result);
  };

  const register = async (email, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({ email, password });

    const requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };

    const response = await fetch(
      "http://localhost:5500/api/auth/register",
      requestOptions
    );

    const result = await response.json();

    if (response.status === 200) {
      setToken(result);
      return result;
    }

    throw new Error(result);
  };

  const me = async () => {
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers,
    };

    const response = await fetch(
      "http://localhost:5500/api/auth/me",
      requestOptions
    );

    const result = await response.json();

    if (response.status === 200) {
      return result;
    }

    throw new Error(result);
  };

  return (
    <UserContext.Provider value={{ token, logout, login, me, register }}>
      {children}
    </UserContext.Provider>
  );
};
