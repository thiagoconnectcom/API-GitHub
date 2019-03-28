import React, { Fragment } from "react";
import Logo from "../../img/logo.png";

const Navbar = () => (
  <Fragment>
    <nav className="navbar navbar-dark bg-info">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={Logo} />
        </a>
      </div>
    </nav>
  </Fragment>
);

export default Navbar;
