import React from "react";
import { InlineWidget } from "react-calendly";

import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="reservation">
      <h1 className="reservation__title">Réserver votre session</h1>
      <div className="reservation__calendly">
        <InlineWidget url="https://calendly.com/originesounds-rec" />
      </div>
    </div>
  );
};

export default Reservation;
