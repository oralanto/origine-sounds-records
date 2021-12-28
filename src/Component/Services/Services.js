import React from "react";
import { Link } from "react-router-dom";

import "./Services.css";

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
    title: "Enregistrement",
    info: "Un bon morceau commence avant tout par de bonnes prises audio. Au sein de notre studio, vous aurez accès à une cabine professionnelle 100% insonorisée ainsi que des micros haut de gamme, afin de vous fournir la meilleure qualité qu'il soit.",
  },
  {
    img: Mixage,
    title: "Mixage",
    info: "En travaillant avec notre équipe, nous vous garantissons une compétitivité avec ce qu'il se fait de mieux aujourd'hui (balances, équilibre fréquentiel, edition de voix, loudness, largeur sétéro, clareté, etc.). Notre ambition est de nous installer comme une référence en la matière dans la région et au-delà.",
  },
  {
    img: Mastering,
    title: "Mastering",
    info: "Services de Mastering uniquement en matériels Software. Qualité de haut niveau concurrençant le marché professionnel.",
  },
  {
    img: Topline,
    title: "Topline",
    info: "Le rôle d'un topliner est d'écrire une mélodie à partir d’un beat déjà existant. En clair, vous récupérerez une instru avec un yaourt déjà bien en place, sur lequel vous aurez uniquement besoin de caler votre texte. Le topliner est là pour prémâcher le travail et offrir à l’artiste le meilleur écrin possible. ",
  },
  {
    img: DigitalMarketing,
    title: "Digital Marketing",
    info: "Publication de vos musiques sur plus de 200 plateformes de streaming musical. (Youtube / Spotify / Deezer / Napster / Apple Music...et bien d'autres). Suivis d'un accompagnement artistique sur le monde du \"Music Business\".",
  },
  {
    img: Cover,
    title: "Cover",
    info: "Donnez une image à votre morceau. La pochette retranscrit votre univers musical, elle donne également envie de cliquer sur le morceau dans les plateformes digitales. Elle est l'emballage de votre musique !",
  },
  {
    img: Beatmaking,
    title: "Beatmaking",
    info: "Grâce à notre expérience, notre sérieux et notre diversité musical, nous disposons donc d'un catalogue d'instrumental riche et varié en différents styles musicaux.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">Nos services</h2>
      <div className="services__list">
        {Items.map((item) => {
          return (
            <div className="services__list__item">
              <img
                className="services__list__item__image"
                src={item.img}
                alt={item.title}
              />
              <div className="services__list__item__infos">
                <h2 className="services__list__item__title">{item.title}</h2>
                <p className="services__list__item__text">{item.info}</p>
                <Link to="/tarifs">
                  <button className="services__list__item__button">
                    En savoir plus
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="services__infos">
        <p className="services__infos__title">
          En quoi sommes-nous différents des autres ?
        </p>
        <p className="services__infos__text">
          Fiers de vous recevoir dans nos locaux de 80m2 entièrement dédiés à la
          production de votre morceau, nous vous offrons professionnalisme et
          bonne ambiance garantie ! Notre équipe jeune et dynamique est prête a
          vous recevoir et donner le maximum pour satisfaire vos attentes. Il
          est toujours plus facile de faire du bon travail lorsque l'on croit en
          ce que l'on fait. C'est la raison pour laquelle nous nous engageons à
          aider davantage de personnes, jour après jour.
        </p>
      </div>
    </div>
  );
};

export default Services;
