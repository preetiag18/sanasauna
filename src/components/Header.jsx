import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="./logo.png" alt="logo" />
      <Link to="/"></Link>
      <Nav />
    </header>
  );
};

export default Header;