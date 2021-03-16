import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [logedIn, setLoggedIn] = useState(undefined);

  async function getLogedIn() {
    const logedInResponce = await axios.get(
      "http://localhost:5000/auth/logedin"
    );
    setLoggedIn(logedInResponce.data);
  }

  useEffect(() => {
    getLogedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ logedIn, getLogedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
