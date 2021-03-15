import React from "react";
import "./Styles/navigation.css";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";

const Navigation = () => {
  const user = null;
  return (
    <header>
      <section className="logo">MERN FORUM</section>
      <nav>
        {user ? (
          <ul>
            <li>
              <Link to="/">
                <HomeIcon /> Home
              </Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <Link to="/logout">LogOut</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/">
                <HomeIcon />
              </Link>
            </li>
            <li>
              <Link to={"/register"}>
                <LockOpenIcon />{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to={"/login"}>
                <VpnKeyIcon />
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
