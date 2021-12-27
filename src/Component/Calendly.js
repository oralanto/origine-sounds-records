import React from "react";
import { SocialIcon } from "react-social-icons";
import { InlineWidget } from "react-calendly";
import Logo from "../Assets/Images/logo-OSR.png";

const Calendly = () => {
  return (
    <div style={style.page}>
      <h1 style={style.title}>Réserver votre session</h1>
      <div style={style.calendly}>
        <InlineWidget url="https://calendly.com/originesounds-rec" />
      </div>
      <div style={style.footer}>
        <img src={Logo} alt="logo" style={style.logoFooter} />
        <div style={style.socialMedia}>
          <SocialIcon url="https://www.facebook.com/originesounds.rec/" />
          <SocialIcon url="https://twitter.com/OrigineSounds?s=09" />
          <SocialIcon url="https://www.instagram.com/originesounds.rec/" />
          <SocialIcon url="https://www.youtube.com/channel/UCDpcGNscmfQM3cGWtOlehpQ" />
        </div>
      </div>
      <div style={style.links}>
        <a
          href="https://origine-sounds-records.jimdosite.com/mentions-legales/"
          style={style.link}
        >
          Mentions légales
        </a>
        <a
          href="https://origine-sounds-records.jimdosite.com/politique-de-confidentialite/"
          style={style.link}
        >
          Politique de confidentialité
        </a>
        <a
          href="https://origine-sounds-records.jimdosite.com/parametres-des-cookies/"
          style={style.link}
        >
          Paramètres des cookies
        </a>
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
  title: { color: "#f1f1f1", fontSize: "3em" },
  calendly: {
    maxHeight: "950px",
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
    width: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  links: {
    margin: "0 5em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  link: {
    color: "#f1f1f1",
    textDecoration: "underline",
    margin: ".5em",
  },
};

export default Calendly;
