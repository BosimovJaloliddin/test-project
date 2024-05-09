import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-one">
        <div className="navbar-one_item">1</div>
        <div className="navbar-one_item">2</div>
      </div>
      <div className="navbar-two">
        <div className="navbar-two_logo">Logo</div>
        <div className="navbar-two_catalog">Catalog</div>
        <div className="navbar-two_nav">Nav</div>
        <div className="navbar-two_login">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
