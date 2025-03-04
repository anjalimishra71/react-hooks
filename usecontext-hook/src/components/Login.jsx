import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <button onClick={login} style={{ padding: "10px", marginTop: "20px" }}>
      Login
    </button>
  );
};

export default Login;