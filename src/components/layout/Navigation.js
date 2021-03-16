import React, { useContext } from "react";
import "./Styles/Navigation.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logout from "../Auth/Logout";

const Navigation = () => {
  const { logedIn } = useContext(AuthContext);

  return (
    <header className="header">
      <section className="logo">MERN FORUM</section>
      <nav className="navigation">
        <Link className="nav-item" to="/">
          Home
        </Link>
        {logedIn === false && (
          <>
            <Link className="nav-item" to="/register">
              Register
            </Link>
            <Link className="nav-item" to="/login">
              Login
            </Link>
          </>
        )}
        {logedIn === true && (
          <>
            <Link className="nav-item" to="/profile">
              Profile
            </Link>
            <Logout />
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
