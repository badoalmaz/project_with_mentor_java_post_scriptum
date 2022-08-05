import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://35.239.251.89/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (user) => {
    let formData = new FormData();
    formData.append("username", user.email);
    formData.append("password", user.password);

    try {
      const res = await axios.post(`${API}register/`, formData, config);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("Error occured:", error);
    }
  };

  const login = async (user) => {
    console.log(user);
    let formData = new FormData();
    formData.append("username", user.email);
    formData.append("password", user.password);

    try {
      let res = await axios.post(`${API}api/token/`, formData, config);
      navigate("/");
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", user.email);
    } catch (error) {
      console.log(error);
      setError("Error occured:", error);
    }
  };

  return (
    <authContext.Provider value={{ register, login }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
