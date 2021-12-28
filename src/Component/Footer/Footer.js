import React from "react";
import { SocialIcon } from "react-social-icons";

import "./Footer.css";
import Logo from "../../Assets/Images/logo-OSR.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__infos">
        <img src={Logo} alt="logo" className="footer__infos__logo" />
        <div className="footer__infos__socialMedias">
          <SocialIcon url="https://www.facebook.com/originesounds.rec/" />
          <SocialIcon url="https://twitter.com/OrigineSounds?s=09" />
          <SocialIcon url="https://www.instagram.com/originesounds.rec/" />
          <SocialIcon url="https://www.youtube.com/channel/UCDpcGNscmfQM3cGWtOlehpQ" />
        </div>
      </div>
      <div className="footer__links">
        <a href="/mentions-legales" className="footer__links__link">
          Mentions légales
        </a>
        <a
          href="https://origine-sounds-records.jimdosite.com/politique-de-confidentialite/"
          className="footer__links__link"
        >
          Politique de confidentialité
        </a>
        <a
          href="https://origine-sounds-records.jimdosite.com/parametres-des-cookies/"
          className="footer__links__link"
        >
          Paramètres des cookies
        </a>
      </div>
    </div>
  );
};

export default Footer;
