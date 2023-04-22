import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"; // Add this line

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, TextField, Button, Stack, Typography } from "@mui/material/";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Styles/Register.css";

import { registerSuccess } from "../../redux/features/authSlice";

const Register = () => {
  const [userData, setUserData] = useState({
    email: null,
    username: null,
    password: null,
    repeatPassword: null,
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    history.push("/auth");
  };

  const handleSignup = (e) => {
    // Dispatch the registerSuccess action with the user data
    e.preventDefault();
    const { email, username, password, repeatPassword } = userData
    if (!email || !username || !password || !repeatPassword) {
      alert("All fields are required");
      return;
    }
    console.log(userData)
    dispatch(registerSuccess(userData));

    // Redirect to the dashboard page (or wherever you want to redirect)
    history.push("/dashboard");
  };


  return (
    <Box className="login-wrapper">
      <Typography variant="h5" component="h2" style={{ marginTop: "15px" }}>
        Register your Account
      </Typography>
      <AccountCircleIcon
        style={{ marginTop: "15px", fontSize: "30px" }}
        color="primary"
      />
      <TextField
        id="email"
        name="email"
        type="text"
        label="Email"
        variant="standard"
        onChange={(e) => handleInput(e)}
        required
      />
      <TextField
        id="username"
        name="username"
        type="text"
        label="Username"
        variant="standard"
        onChange={(e) => handleInput(e)}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="standard"
        onChange={(e) => handleInput(e)}
        required
      />
      <TextField
        style={{ marginBottom: "15px" }}
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        label="Repeat Password"
        variant="standard"
        onChange={(e) => handleInput(e)}
        required
      />
      <Button variant="contained" onClick={(e) => handleSignup(e)}>SignUp</Button>
      <Stack>
        <Typography style={{ marginTop: "15px" }}>
          Already have an account
        </Typography>
        <Button style={{ marginTop: "15px" }} onClick={() => handleLogin()}>
          <ArrowRightIcon /> Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Register;
