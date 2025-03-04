import React from "react";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Home />
      </div>
    </AuthProvider>
  );
};

export default App;