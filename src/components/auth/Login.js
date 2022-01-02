import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Button, Stack, Typography } from "@mui/material/";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { loginUser } from "../../redux/actions/authActions";

import "./Styles/Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: null,
    password: null,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const authenticateUser = (e) => {
    e.preventDefault();

    const { email, password } = userData;

    dispatch(loginUser(email, password));
    history.push("/");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <Box className="login-wrapper">
      <Typography variant="h5" component="h2" style={{ marginTop: "15px" }}>
        Please enter email and password
      </Typography>
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
        style={{ marginBottom: "15px" }}
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="standard"
        onChange={(e) => handleInput(e)}
        required
      />
      <Button variant="contained" onClick={(e) => authenticateUser(e)}>
        Login
      </Button>

      <Stack>
        <Typography style={{ marginTop: "15px" }}>
          Don't have an account
        </Typography>
        <Button style={{ marginTop: "15px" }} onClick={() => handleRegister()}>
          <ArrowRightIcon /> Register
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
