import React from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@mui/material/";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = null;

  return (
    <AppBar position="static">
      <div>
        <Typography component={Link} to="/" variant="h2" align="center">
          MERN FORUM
        </Typography>
      </div>
      <Toolbar className="toolbar">
        {user ? (
          <div className="profile">
            <Avatar
              className="Avatar"
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.cartAt(0)}
            </Avatar>
            <Typography className="username" variant="h6"></Typography>
            <Button varian="contained" className="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
