import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-wrapper">
      <section className="logo">MERN FORUM</section>

      <section>
        <ul>
          <li to="">Home</li>
          <li>login/register</li>
        </ul>
      </section>
    </div>
  );
}

export default Navigation;
