import React from "react";
import "./Styles/navigation.css";

const Navigation = () => {
  return (
    <header>
      <section className="logo">MERN FORUM</section>
      <nav>
        <ul>
          <li>Home</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
