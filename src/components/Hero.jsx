import React from "react";

import logo from "../assets/logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4"> Démonstration webapp Stimuli </h1>
    <p className="lead">
      Connectez-vous pour consulter cette application.{" "}
    </p>{" "}
    <p> Découvrez la maquette et les avantages de la création de compte. </p>{" "}
  </div>
);

export default Hero;
