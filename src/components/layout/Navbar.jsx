import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="nav-wrapper">
      <section className="logo">MERN FORUM</section>

      <section>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
          <Link to="/dashbord">Dashbord</Link>
        </ul>
      </section>
    </div>
  );
}

export default NavBar;
