import React, { useState } from "react";
import { Link } from "react-router-dom";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./Styles/Login.css";
import axios from "axios";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <section className="login-wrapper">
      <form>
        <VpnKeyIcon />
        <input className="login-input" type="email" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Password" />
        <button className="login-button">SignIn</button>
        <span>
          Dont't have an account<Link to="/register">Register</Link>
        </span>
      </form>
    </section>
  );
};

export default Login;
