import React, { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import store from "../utils/store";
import { useAuth0 } from "@auth0/auth0-react";
import  { useLocation  } from 'react-router-dom'

store.setState("Premium", false, { persist: true });

const Footer = () => {
  const Authenticated = useAuth0().isAuthenticated;
  const Loading = useAuth0.isLoading;

  const currentLocation = useLocation();

  const [premiumDisabled, setPremiumDisabled] = useState()
  const [premiumchecked, setPremiumChecked] = store.useState("Premium");

  const handleChange = () => {
    if (!premiumchecked){
      alert("Vous pouvez désormais accéder à l'espace membre.")
    }
    setPremiumChecked(!premiumchecked);    
  };

  useEffect(() => {
    // On peut déterminer un état par défaut dans le "return", mais on ne pourrait plus y toucher à chaque rendu,
    // donc on change les états du switch en JS dans useEffect, après le premier rendu et à chauqe modification des useState.
    if (Authenticated && !Loading){
      if (premiumchecked) {
        setPremiumChecked(true)
        if (currentLocation.pathname==="/welcome"){
          setPremiumDisabled(false)
        } else {
          setPremiumDisabled(true)
        }
      } else {
        setPremiumChecked(false)
        if (currentLocation.pathname==="/welcome"){
          setPremiumDisabled(false)
        } else {
          setPremiumDisabled(true)
        }
      }
    }else{
      setPremiumDisabled(true)
    }
  }, [Authenticated, Loading, premiumchecked, currentLocation, setPremiumChecked]);

  return (
    <footer className="bg-light p-5 text-center">
      <div className='col text-right'>
        <FormControlLabel disabled={premiumDisabled} checked={premiumchecked} control={<Switch onChange={(e) => handleChange(e)}/>} label="Premium " />
      </div>
      <p>Copyright © 2022 Stimuli by David BRUNET</p>
    </footer>
  );
};

export default Footer;
