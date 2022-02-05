import React from "react";

import emailjs from "emailjs-com";
import apiKeys from "../../apikeys";

import "./Contact.css";
import Desktop from "../../Assets/Images/Desktop.png";

const Contact = () => {
  const onSubmit = (e) => {
    console.log("onSubmit", e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Merci pour votre message", result.text);
        },
        (error) => {
          alert("Une erreur c'est produite, veuillez réessayer", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__infos">
        <div className="contact__infos__description">
          <h1 className="contact__infos__description__title">Contact</h1>
          <p className="contact__infos__description__text">
            Prêt(e) à prendre rendez-vous, poser une question ou juste envie de
            discuter avec nous de vos besoins ? Notre équipe est là pour vous
            aider. Prendre contact avec nous n'a jamais été aussi facile grâce à
            notre formulaire de contact !
          </p>
        </div>
        <img
          src={Desktop}
          alt="Console mixage studio d'enregistrement musique"
          className="contact__infos__img"
        />
      </div>
      <div className="contact__containerForm">
        <form className="contact__containerForm__form" onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nom, prénom"
            className="contact__containerForm__form__input"
            required
          />
          <input
            name="mail"
            type="email"
            placeholder="example@mail.com"
            className="contact__containerForm__form__input"
            required
          />
          <input
            name="tel"
            type="tel"
            placeholder="Téléphone (indiquer votre indicatif international 0033 ou +33...)"
            className="contact__containerForm__form__input"
            required
          />
          <textarea
            name="message"
            type="text"
            placeholder="Veuillez indiquer votre demande.."
            className="contact__containerForm__form__textarea"
            required
          />
          <button className="contact__containerForm__form__button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
