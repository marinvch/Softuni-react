import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { url } from "../../Api/index";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import "./Styles/Register.css";

const Register = () => {
  const history = useHistory();

  let [email, setEmail] = useState();
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();

  const submit = async (e) => {
    try {
      e.preventDefault();
      if (!username) {
        username = email;
      }
      let newUser = { email, username, password, confirmPassword };

      axios.post(`${url}/auth/register`, newUser);

      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="register-wrapper">
      <h1>Register your Account</h1>
      <form onSubmit={submit}>
        <AccountCircleIcon />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-input"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="register-input"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="register-btn" type="submit">
          SignUp
        </button>
        <span>
          <p>Already have an account</p> <Link to="/login">Login</Link>
        </span>
      </form>
    </section>
  );
};

export default Register;
