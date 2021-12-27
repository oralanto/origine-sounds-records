import React from "react";

import Accueil from "../Accueil/Accueil";
import Services from "../Services/Services";
import ReservationInfo from "../ReservationInfo/ReservationInfo";

const Homepage = () => {
  return (
    <div>
      <Accueil />
      <Services />
      <ReservationInfo />
    </div>
  );
};

export default Homepage;
