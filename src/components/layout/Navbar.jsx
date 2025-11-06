import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";


const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper #4db6ac teal lighten-2">
          <div className="container">
            <Link to="/" className="brand-logo ">Mario</Link>
            <SignInLink/>
            <SignOutLink/>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
