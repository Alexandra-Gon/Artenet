import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <Link to="">
          <img
            className="logoFooter"
            src={require("../../images/logo1.png")}
            alt="logo"
          />
        </Link>
        <div className="footerInfo">
          <div className="iconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="footerIcon icon-tabler icon-tabler-map-pin"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className="iconText">Ubicación</p>
          </div>
          <div className="iconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="footerIcon icon-tabler icon-tabler-phone-call"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
            <p className="iconText">Tel: 3027692045</p>
          </div>
          <p className="footerText textCopyright">
            Todos los derechos reservados. Copyright © 2023
          </p>
        </div>
        <ul className="footerLinks">
          <Link to="/" className="footerText">
            INICIO
          </Link>
          <Link to="/servicios" className="footerText">
            SERVICIOS
          </Link>
          <Link to="/productos" className="footerText">
            PRODUCTOS
          </Link>
          <Link to="/contacto" className="footerText">
            CONTACTO
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
