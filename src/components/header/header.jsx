import React from "react";
import {Link} from "react-router-dom";
import {CartBlock} from "../cart-block";
import "./header.css";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="bg"></div>
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          <img src={logo} className="logo" />
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
