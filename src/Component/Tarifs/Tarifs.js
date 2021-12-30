import React from "react";

import "./Tarifs.css";

import Microphone from "../../Assets/Images/Microphone.png";
import Mixage from "../../Assets/Images/Mixage.png";
import Mastering from "../../Assets/Images/Mastering.png";
import Topline from "../../Assets/Images/Topline.png";
import DigitalMarketing from "../../Assets/Images/Digital-Marketing.png";
import Cover from "../../Assets/Images/Cover.png";
import Beatmaking from "../../Assets/Images/Beatmaking.png";

const Items = [
  {
    img: Microphone,
    alt: "Studio musique microphone",
    title: "Enregistrement",
    info: ["40€ l'heure"],
  },
  {
    img: Mixage,
    alt: "Studio musique mixage console d'enregistrement",
    title: "Mixage",
    info: ["100€ Mix prod stéréo", "150 Mix prod multirpistes"],
  },
  {
    img: Mastering,
    alt: "Studio musique mastering console d'enregistrement",
    title: "Mastering",
    info: ["35€ par morceau"],
  },
  {
    img: Topline,
    alt: "Studio musique enregistrement rap chant",
    title: "Topline",
    info: ["50€ le Refrain", "100€ Morceau complet"],
  },
  {
    img: DigitalMarketing,
    alt: "Spotify digital marketing",
    title: "Digital Marketing",
    info: ["50€ par Morceau"],
  },
  {
    img: Cover,
    alt: "SCover hit album couverture",
    title: "Cover",
    info: ["35€ par Cover"],
  },
  {
    img: Beatmaking,
    alt: "Beat beatmaking piano instrument",
    title: "Beatmaking",
    info: ["50€ format .wav", "100€ format multipistes", "Exclu sur demande"],
  },
];

const Tarifs = () => {
  return (
    <div className="tarifs">
      <h1 className="tarifs__title">Tarifs</h1>
      <div className="services__list">
        {Items.map((item) => {
          return (
            <div className="services__list__item">
              <img
                className="services__list__item__image"
                src={item.img}
                alt={item.alt}
              />
              <h2 className="services__list__item__title">{item.title}</h2>
              <div className="services__list__item__text">
                {item.info.map((obj) => (
                  <p>{obj}</p>
                ))}
              </div>
              {/* add button to /tarif */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tarifs;
