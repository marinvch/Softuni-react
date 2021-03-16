import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import './Styles/Logout.css'

function Logout() {
  const { getLogedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logout() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLogedIn();
    history.push("/");
  }
  return <button className="logout" onClick={logout}>Logout</button>;
}

export default Logout;
