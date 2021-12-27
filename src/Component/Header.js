import React from "react";
import Logo from "../Assets/Images/logo-OSR.png";

const Header = () => {
  return (
    <div style={style.header}>
      <div style={style.navBar}>
        <div style={style.logoLabel}>
          <img src={Logo} alt="logo" style={style.logoNavBar} />
          <p style={style.label}>Origine Sounds Records</p>
        </div>
        <div style={style.nav}>
          <a
            href="https://origine-sounds-records.jimdosite.com/"
            style={style.navLink}
          >
            Accueil
          </a>
          <a
            href="https://origine-sounds-records.jimdosite.com/tarifs/"
            style={style.navLink}
          >
            Tarifs
          </a>
          <a
            href="https://origine-sounds-records.jimdosite.com/reservations/"
            style={style.navLink}
          >
            Réservations
          </a>
          <a
            href="https://origine-sounds-records.jimdosite.com/contact/"
            style={style.navLink}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

const style = {
  header: {
    backgroundColor: "black",
    position: "fixed",
    top: "0",
    width: "100%",
  },
  navBar: { display: "flex" },
  logoLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: "1",
  },
  logoNavBar: {
    maxWidth: "100px",
    height: "auto",
    margin: "1em",
  },
  label: { color: "#f1f1f1", margin: "1em", justifyContent: "center" },
  nav: {
    display: "flex",
    flexGrow: "3",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navLink: { color: "#f1f1f1", textDecoration: "underline", margin: "0 1em" },
};

export default Header;
