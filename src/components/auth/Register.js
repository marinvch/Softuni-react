import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Styles/Register.css";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  async function registerUser(e) {
    e.preventDefault();

    try {
      const newUser = {
        email,
        password,
        confirmPassword,
      };

      await axios.post("http://localhost:5000/auth/register", newUser);

      const loginRes = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.user);

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="register-wrapper">
      <h1>Register your Account</h1>
      <form onSubmit={registerUser}>
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
        <input
          className="register-input"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
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
