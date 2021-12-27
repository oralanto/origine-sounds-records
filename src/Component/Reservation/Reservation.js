import React from "react";
import { InlineWidget } from "react-calendly";

import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="reservation">
      <h1 className="reservation__title">Réserver votre session</h1>
      <InlineWidget
        url="https://calendly.com/originesounds-rec"
        styles={{ height: "1000px", width: "100%" }}
      />
    </div>
  );
};

export default Reservation;
