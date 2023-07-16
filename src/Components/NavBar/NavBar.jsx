import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBarContainer">
        <ul className="navBarLinks">
          <Link to="/" className="navBarLink">
            INICIO
          </Link>
          <Link to="/servicios" className="navBarLink">
            SERVICIOS
          </Link>
          <Link to="/productos/all" className="navBarLink">
            PRODUCTOS
          </Link>
          <Link to="/contacto" className="navBarLink">
            CONTACTO
          </Link>
        </ul>
        <ShoppingCart />
        
      </div>
    </nav>
  );
};

export default NavBar;
