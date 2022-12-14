import React from "react";

import logo from "../assets/logo.png";
import github from "../assets/github.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Stimuli logo" width="120" />
    <h1 className="mb-4"> Démonstration webapp Stimuli </h1>
    <p className="lead">
      Connectez-vous pour consulter cette application.{" "}
    </p>{" "}
    <p> Découvrez <a href="https://www.figma.com/file/XV3IMdUHX0evggp32diLta/DemoStimuli?node-id=0%3A1&t=DLtUn17QCwQmpDrt-1" target="_blank" rel="noreferrer">la maquette sur Figma</a> et les avantages de la création de compte. </p>{" "}
    <a href="https://github.com/DavidSimplon/demoStimuli" target="_blank" rel="noreferrer">
      Code source Github <img src={github} alt='github'/>
    </a>
  </div>
);

export default Hero;
