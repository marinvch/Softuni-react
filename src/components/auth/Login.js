import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Styles/Login.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLogedIn } = useContext(AuthContext);
  const history = useHistory();
  async function loginUser(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
      await getLogedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navigation />
      <section className="register-wrapper">
        <h1>Log in to your Account</h1>
        <form onSubmit={loginUser}>
          <AccountCircleIcon />
          <input
            className="register-input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="register-buton" type="submit">
            Login
          </button>
          <span>
            Don't have an account?<Link to="/register">Register</Link>
          </span>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
