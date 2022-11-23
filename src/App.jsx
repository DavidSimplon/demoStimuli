import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Welcome from "./views/Welcome";
import Premium from "./views/Premium";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import store from "./utils/store";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  const [premium] = store.useState("Premium");
  
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
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />{" "}
            <Route path={`${process.env.PUBLIC_URL}/welcome`} component={Welcome} />{" "}
            <Route path={`${process.env.PUBLIC_URL}/premium`} component={(premium && Premium) || (!premium && Home)} />{" "}
            <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile} />{" "}
            <Route path="*" component={NotFound} />{" "}
          </Switch>{" "}
        </Container>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
};

export default App;
