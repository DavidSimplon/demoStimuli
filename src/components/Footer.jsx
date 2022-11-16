import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import SwitchBase from "@mui/material/Switch";
import store from "../utils/store";
import { useAuth0 } from "@auth0/auth0-react";
import  { useLocation  } from 'react-router-dom'

store.setState("Premium", false, { persist: true });

const Footer = () => {
  const Authenticated = useAuth0().isAuthenticated;
  const Loading = useAuth0.isLoading;

  const currentLocation = useLocation();

  const [premium, setPremium] = store.useState("Premium");

  const handleChange = (e) => {
    if (!premium){
      alert("Vous pouvez désormais accéder à l'espace membre.")
    }
    setPremium(!premium);    
  };

  const initSwitch = () => {
    if (Authenticated && !Loading){
      if (premium) {
        if (currentLocation.pathname==="/welcome"){
          return (
            <FormControlLabel control={<SwitchBase checked onChange={(e) => handleChange(e)} />} label="Premium " />
          );
        }else{
          return (
            <FormControlLabel control={<SwitchBase checked disabled onChange={(e) => handleChange(e)} />} label="Premium " />
            );
        }
      } else {
        if (currentLocation.pathname==="/welcome"){
          return (
          <FormControlLabel control={<SwitchBase onChange={(e) => handleChange(e)} />} label="Premium " />
        );
        }else{
          return (
            <FormControlLabel control={<SwitchBase disabled onChange={(e) => handleChange(e)} />} label="Premium " />
            );
        }
    }
    }else{
      return ""
    }
  };

  return (
    <footer className="bg-light p-5 text-center">
      <div className='col text-right'>
        {initSwitch()}
      </div>
      <p>Copyright © 2022 Stimuli by David BRUNET</p>
    </footer>
  );
};

export default Footer;
