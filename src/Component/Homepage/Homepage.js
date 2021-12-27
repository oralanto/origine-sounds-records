import React from "react";

import Accueil from "../Accueil/Accueil";
import Services from "../Services/Services";
import ReservationInfo from "../ReservationInfo/ReservationInfo";
import Location from "../Location/Location";

const Homepage = () => {
  return (
    <div>
      <Accueil />
      <Services />
      <ReservationInfo />
      <Location />
    </div>
  );
};

export default Homepage;
