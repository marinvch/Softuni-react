import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Login.css";

const Login = () => {
  return (
    <section className="login-wrapper">
      <h1>Log in to your Account</h1>
      <form>
        <input
          className="register-input"
          type="text"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <span>
          <p>Don't have an account?</p> <Link to="/register">Register</Link>
        </span>
      </form>
    </section>
  );
};

export default Login;
