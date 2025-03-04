import React, { useContext } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome, User!</h1>
          <Logout />
        </>
      ) : (
        <>
          <h1>Please Log In</h1>
          <Login />
        </>
      )}
    </div>
  );
};

export default Home;