import React from "react";
import { InlineWidget } from "react-calendly";
import Logo from "../Assets/Images/logo-OSR.png";

const Calendly = () => {
  return (
    <div style={style.page}>
      <div style={style.navBar}>
        <div style={style.logoLabel}>
          <img src={Logo} alt="logo" style={style.logoNavBar} />
          <p style={style.label}>Origine Sounds Records</p>
        </div>
        <div style={style.nav}>
          <p style={style.navLink}>Accueil</p>
          <p style={style.navLink}>Tarifs</p>
          <p style={style.navLink}>Réservations</p>
          <p style={style.navLink}>Contact</p>
        </div>
      </div>
      <h1 style={style.title}>Réserver votre session</h1>
      <div style={style.calendly}>
        <InlineWidget url="https://calendly.com/originesounds-rec" />
      </div>
      <div style={style.footer}>
        <img src={Logo} alt="logo" style={style.logoFooter} />
        <div style={style.socialMedia}>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
      </div>
      <div style={style.links}>
        <p style={style.link}>Mentions légales</p>
        <p style={style.link}>Politique de confidentialité</p>
        <p style={style.link}>Paramètres des cookies</p>
      </div>
    </div>
  );
};

const style = {
  page: {
    minHeight: "100vh",
    backgroundColor: "black",
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
  title: { color: "#f1f1f1", fontSize: "3em" },
  calendly: {
    maxHeight: "1000px",
    overflow: "hidden",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2em 5em",
  },

  logoFooter: { maxWidth: "200px", height: "auto", margin: "1em" },
  socialMedia: {
    color: "#f1f1f1",
    display: "flex",
    flexDirection: "row",
  },
  links: {
    color: "#f1f1f1",
    margin: "0 5em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  link: { textDecoration: "underline", margin: ".5em" },
};

export default Calendly;
