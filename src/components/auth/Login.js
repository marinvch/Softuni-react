import React, { useState } from "react";
import axios from "axios";

import "./Login.css";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Log in to your account</h1>
      <form className="login-form" onSubmit={login}>
        <input
          type="email"
          required
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          required
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
