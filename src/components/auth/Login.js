import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Styles/Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  async function loginUser(e) {
    e.preventDefault();

    try {
      const loginUser = {
        email,
        password,
      };

      const loginRes = await axios.post(
        "http://localhost:5000/auth/login",
        loginUser
      );

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <section className="login-wrapper">
        <h1>Log in to your Account</h1>
        <form onSubmit={loginUser}>
          <AccountCircleIcon />
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="login-buton" type="submit">
            Login
          </button>
          <span>
            Don't have an account?<Link to="/register">Register</Link>
          </span>
        </form>
      </section>
    </>
  );
};

export default Login;
