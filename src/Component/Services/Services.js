import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Services.css";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

// items and video array

import { services, videos } from "../../Data/data";

const Services = () => {
  const [items, setItems] = useState();
  const [creations, setCreation] = useState();

  useEffect(() => {
    setItems(services);
    setCreation(videos);
  }, []);

  return (
    <div className="services">
      <h2 className="services__title">Nos services</h2>
      <div className="services__list">
        {items ? (
          items.map((item, index) => {
            return (
              <div key={index} className="services__list__item">
                <img
                  className="services__list__item__image"
                  src={item.img}
                  alt={item.alt}
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
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div className="services__videos">
        <h2 className="services__videos__title">Nos créations</h2>
        <div className="services__videos__list">
          {creations ? (
            creations.map((video, index) => {
              return (
                <div key={index} className="services__videos__list__item">
                  <h3 className="services__videos__list__item__title">
                    {video.title}
                  </h3>
                  <YoutubeEmbed embedId={video.id} />
                </div>
              );
            })
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
      <div className="services__infos">
        <p className="services__infos__title">
          En quoi sommes-nous différents des autres ?
        </p>
        <p className="services__infos__text">
          Fiers de vous recevoir dans nos locaux de 80m2 entièrement dédiés à la
          <strong>production</strong> de votre morceau, nous vous offrons
          professionnalisme et bonne ambiance garantie ! Notre équipe jeune et
          dynamique est prête a vous recevoir et donner le maximum pour
          satisfaire vos attentes. Il est toujours plus facile de faire du bon
          travail lorsque l'on croit en ce que l'on fait. C'est la raison pour
          laquelle nous nous engageons à aider davantage de personnes, jour
          après jour.
        </p>
      </div>
    </div>
  );
};

export default Services;
