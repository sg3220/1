import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header--Logo">Logo</div>

      <div className="Header--NavigationBar">
        <div className="Header--NavigationBar-Element">
          <Link to={"/"} className={"U-Link"}>
            Home
          </Link>
        </div>

        <div className="Header--NavigationBar-Element U-Display-Row U-Center-Center">
          <Link to={"/Account"} className={"U-Link"}>
            Account
          </Link>
        </div>

        <div className="Header--NavigationBar-Element U-Display-Row U-Center-Center">
          <Link to={"/Cart"} className={"U-Link"}>
            Cart
          </Link>
        </div>

        <div className="Header--NavigationBar-Element U-Display-Row U-Center-Center">
          <Link to={"/Authorization"} className={"U-Link"}>
            Login/Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
