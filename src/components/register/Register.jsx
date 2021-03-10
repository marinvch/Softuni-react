import React from "react";
import Navigation from "../pages/Navigation/Navigation";

function Register() {
  return (
    <div>
      <Navigation />
      <form className="register-form">
        <input type="email" required placeholder="Enter email" />
        <input type="password" required placeholder="Enter password" />
        <input type="password" required placeholder="Confirm password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Register;
