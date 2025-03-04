import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button onClick={logout} style={{ padding: "10px", marginTop: "20px" }}>
      Logout
    </button>
  );
};

export default Logout;