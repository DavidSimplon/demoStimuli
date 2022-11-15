import React from "react";
import { Router, Route, Switch, Navigate } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Welcome from "./views/Welcome";
import Premium from "./views/Premium";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import NotFound from "./views/NotFound";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import { createStore } from 'state-pool';
import store from "./utils/store";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  const [premium] = store.useState("Premium");

  // const globalStore = createStore() // Create store for storing our global state
  // globalStore.setState("Premium", false); // Create "Premium" global state and add it to the store
  
  if (error) {
    return <div> Oops... {error.message} </div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />{" "}
            <Route path="/welcome" component={Welcome} />{" "}
            <Route path="/premium" component={premium && Premium || !premium && Home} />{" "}
            <Route path="/profile" component={Profile} />{" "}
            <Route path="/external-api" component={ExternalApi} />{" "}
            <Route path="*" component={NotFound} />{" "}
          </Switch>{" "}
        </Container>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
};

export default App;
