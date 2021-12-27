import React from "react";
import Logo from "../../Assets/Images/logo-OSR.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__navBar">
        <div className="header__navBar__logoLabel">
          <img
            src={Logo}
            alt="logo"
            className="header__navBar__logoLabel__logo"
          />
          <p className="header__navBar__logoLabel__label">
            Origine Sounds Records
          </p>
        </div>
        <div className="header__navBar__nav">
          <a href="/" className="header__navBar__nav__link">
            Accueil
          </a>
          <a
            href="https://origine-sounds-records.jimdosite.com/tarifs/"
            className="header__navBar__nav__link"
          >
            Tarifs
          </a>
          <a href="/reservation" className="header__navBar__nav__link">
            Réservations
          </a>
          <a
            href="https://origine-sounds-records.jimdosite.com/contact/"
            className="header__navBar__nav__link"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
