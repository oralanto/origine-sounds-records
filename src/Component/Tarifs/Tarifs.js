import React, { useEffect, useState } from "react";

import "./Tarifs.css";

import { services } from "../../Data/data";

const Tarifs = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(services);
  }, []);

  return (
    <div className="tarifs">
      <h1 className="tarifs__title">Tarifs</h1>
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
                <h2 className="services__list__item__title">{item.title}</h2>
                <div className="services__list__item__text">
                  {item.price.map((obj, index) => (
                    <p key={index}>{obj}</p>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Tarifs;
