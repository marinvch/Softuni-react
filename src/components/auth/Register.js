import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Styles/Register.css";
import { registerUser } from "../Api/index";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  async function sendRegistration(e) {
    e.preventDefault();

    try {
      registerUser(data);

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="register-wrapper">
      <h1>Register your Account</h1>
      <form onSubmit={sendRegistration}>
        <AccountCircleIcon />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="register-input"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          className="register-input"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />
        <button className="register-buton" type="submit">
          SignUp
        </button>
        <span>
          Already have an account<Link to="/login">Login</Link>
        </span>
      </form>
    </section>
  );
};

export default Register;
