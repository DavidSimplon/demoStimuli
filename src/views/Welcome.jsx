import React, { Fragment } from "react";

import { Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import lorem_ipsum from "../utils/loremIpsum";

const Welcome = () => {
  const { user } = useAuth0();

  return (
  <Fragment>
    <h1 className="mb-5">Bienvenue {user.name}</h1>
    <Row>
      <Col className="mb-4" xs={12} md={4}>
        <img src='https://picsum.photos/800/600' alt='Paysage' width='100%'/>
      </Col>
      <Col className="mb-4" xs={12} md={6}>
        <p> {lorem_ipsum.generateParagraphs(1)} </p>{" "}
        <p> {lorem_ipsum.generateParagraphs(1)} </p>{" "}
      </Col>
    </Row>
  </Fragment>
)};

export default withAuthenticationRequired(Welcome, {
  onRedirecting: () => <Loading />,
});