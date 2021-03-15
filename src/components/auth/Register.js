import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Styles/Register.css";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    if (password.toString().length < 6) {
      return console.log("Passowrd need to be atleast 6 characters.");
    }
    if (password.toString() !== confirmPassword.toString()) {
      return console.log("Passwords doesn't match.");
    }
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    await axios
      .post("http://localhost:5000/auth/register", data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <section className="register-wrapper">
      <form onSubmit={registerUser}>
        <AccountCircleIcon />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="register-input"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
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
