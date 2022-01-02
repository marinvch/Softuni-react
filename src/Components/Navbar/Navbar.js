import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Avatar,
  Container,
  Box,
} from "@mui/material/";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../redux/services/authService";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setUser(localStorage.getItem("authenticated"));
  }, [user]);

  const handleHome = () => {
    history.push("/");
  };
  const logoutHandler = () => {
    authLogout();
    setUser(null);
    history.push("/");
  };
  return (
    <Toolbar>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{
              background: "#39796b",
              color: "#212121",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ cursor: "pointer" }}
                onClick={() => handleHome()}
              >
                MERN FORUM
              </Typography>
              {auth.token !== null || user !== null ? (
                <>
                  <Avatar
                    className="Avatar"
                    alt={auth?.username}
                    sx={{ mr: 2 }}
                  >
                    {auth.user?.username.charAt(0)}
                  </Avatar>
                  <Button
                    component={Link}
                    color="inherit"
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button component={Link} to="/auth" color="inherit">
                  Login
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </Toolbar>
  );
};

export default Navbar;
