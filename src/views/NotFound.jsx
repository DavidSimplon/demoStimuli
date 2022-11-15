import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Fragment>
    <div className="text-center">
      <h1 >Page introuvable !</h1>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  </Fragment>
);

export default NotFound;