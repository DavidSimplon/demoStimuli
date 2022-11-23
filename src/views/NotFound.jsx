import React, { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => (
  <Fragment>
    <div className="text-center">
      <h1 >Page introuvable !</h1>
      <div>L&apos;adresse &quot;{useLocation().pathname}&quot; n&apos;existe pas !</div>
      <Link to="/">{"Retourner à l'accueil"}</Link>
    </div>
  </Fragment>
);

export default NotFound;