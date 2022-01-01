import React from "react";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Styles/Register.css";

const Register = () => {
  const history = useHistory();

  return (
    <section className="register-wrapper">
      <h1>Register your Account</h1>
      <form>
        <AccountCircleIcon />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="register-input"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="register-input"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
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
