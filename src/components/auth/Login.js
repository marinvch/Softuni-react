import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "./Styles/Login.css";

const Login = () => {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };

      await axios.post(`${url}/auth/login`, loginData).then((res) => {
        setUserData({
          token: res.data.token,
          user: res.data.user,
        });
        localStorage.setItem("auth-token", res.data.token);
      });

      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="login-wrapper">
        <h1>Log in to your Account</h1>
        <form onSubmit={submit}>
          <AccountCircleIcon />
          <input
            className="register-input"
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>
          <span>
            <p>Don't have an account?</p> <Link to="/register">Register</Link>
          </span>
        </form>
      </section>
    </>
  );
};

export default Login;
