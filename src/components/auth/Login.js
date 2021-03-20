import React, { useState, useContext } from "react";
import { loginUser } from "../Api/index";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import UserContext from "../../Context/UserContext";
import "./Styles/Login.css";

const Login = () => {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  async function sendLogin(e) {
    e.preventDefault();

    try {
      loginUser(loginData).then((res) => {
        //Setting localStorage with token and user data
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.findUser));
        setUserData(res.data);
        console.log(setUserData);
      });

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <section className="login-wrapper">
        <h1>Log in to your Account</h1>
        <form onSubmit={sendLogin}>
          <AccountCircleIcon />
          <input
            className="register-input"
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
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
