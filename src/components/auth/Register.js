import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import "./Styles/Register.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { getLogedIn } = useContext(AuthContext);
  const history = useHistory();

  async function registerUser(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        confirmPassword,
      };

      await axios.post("http://localhost:5000/auth/register", registerData);
      await getLogedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    <Navigation/>
      <section className="register-wrapper">
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
      <Footer/>
    </>
  );
};

export default Register;
