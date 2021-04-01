import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Link, useHistory } from "react-router-dom";
import "./Styles/Header.css";

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <header className="header">
      <section className="logo">
        <h1>MERN FORUM</h1>
      </section>
      {userData.user ? (
        <section className="navigation">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/add-post">
            Add Post
          </Link>
          <Link className="nav-item" to="/profile">
            Profile
          </Link>
          <Link className="nav-item" to="/" onClick={() => logout()}>
            Logout
          </Link>
        </section>
      ) : (
        <section className="navigation">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/register">
            Register
          </Link>
          <Link className="nav-item" to="/login">
            Login
          </Link>
        </section>
      )}
    </header>
  );
};

export default Header;
