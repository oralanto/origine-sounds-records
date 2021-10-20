import React from "react";
import { InlineWidget } from "react-calendly";
import Logo from "../Assets/Images/logo-OSR.png";

const Calendly = () => {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "black", width: "100%" }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={Logo}
          alt="logo"
          style={{ maxWidth: "100px", height: "auto", margin: "1em" }}
        />
        <p
          style={{ color: "#f1f1f1", margin: "1em", justifyContent: "center" }}
        >
          Origine Sounds Records
        </p>
      </div>
      <h1 style={{ color: "#f1f1f1", fontSize: "3em" }}>
        Réserver avec calendly
      </h1>
      <div style={{ maxHeight: "1000px", overflow: "hidden" }}>
        <InlineWidget url="https://calendly.com/originesounds-rec" />
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={Logo}
          alt="logo"
          style={{ maxWidth: "100px", height: "auto", margin: "1em" }}
        />
        <p
          style={{ color: "#f1f1f1", margin: "1em", justifyContent: "center" }}
        >
          Origins Sounds Records
        </p>
      </div>
    </div>
  );
};

export default Calendly;
