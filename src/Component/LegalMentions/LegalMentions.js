import React from "react";

import "./LegalMentions.css";

const LegalMentions = () => {
  return (
    <div className="legalMentions">
      <div className="legalMentions__infos">
        <h1 className="legalMentions__infos__title">Mentions légales</h1>
        <p className="legalMentions__infos__text">
          La plupart des lois et réglementations mondiales en matière de
          télécommunications exigent que les sites Web qui n'ont pas une utilité
          strictement privée ou de nature personnelle doivent avoir des mentions
          légales conformes. Ceci est valable également pour les sites contenant
          un blog ou des textes de nature journalistique.
        </p>
        <p className="legalMentions__infos__text">
          Le nom de la personne responsable de la publication doit apparaître
          dans les mentions légales, ainsi que l'adresse et les coordonnées
          complètes. Cela veut dire notamment le téléphone et l'adresse e-mail.
          D'autres informations légales peuvent être requises. Veuillez vous
          rapprocher d'un expert pour connaître le détails des informations
          nécessaires à fournir pour votre site.
        </p>
      </div>
      <div className="legalMentions__credit">
        <p className="legalMentions__credit__text">
          Crédits photo: Claus Grünstäudl on Unsplash, Sašo Tušar on Unsplash,
          Anton Ponomarev on Unsplash, William Stitt on Unsplash, Jaclyn Clark
          on Unsplash, Jonathan Velasquez on Unsplash, Alphacolor 13 on Unsplash
        </p>
      </div>
    </div>
  );
};

export default LegalMentions;
