import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contact__form">
      <h2 className="contact__form__title">Vous souhaitez en savoir plus ?</h2>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="contact__form__form"
      >
        <div className="contact__form__form__inputs">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            required
            className="contact__form__form__inputs__input"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="contact__form__form__inputs__input"
          />
        </div>
        <div className="contact__form__form__message">
          <textarea
            placeholder="Your message"
            name="message"
            required
            className="contact__form__form__message__input"
          />
        </div>
        <div className="contact__form__form__button">
          <button type="submit"> Send a message </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
