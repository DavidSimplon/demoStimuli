import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import lorem_ipsum from "../utils/loremIpsum";

const getParagraphs = () => {
  let content = [];
  for (let i = 0; i < 4; i++) {
    content.push(
      <Col key={i} md={5} className="mb-4">
        <h6 className="mb-3">
          <p>
            <FontAwesomeIcon icon="link" className="mr-2" />{" "}
            {lorem_ipsum.generateWords(4)}{" "}
          </p>{" "}
        </h6>{" "}
        <p> {lorem_ipsum.generateParagraphs(1)} </p>{" "}
      </Col>
    );
  }
  return content;
};

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center"> Lorem Ipsum et blablabla </h2>{" "}
        <Row className="d-flex justify-content-between">
          {" "}
          {getParagraphs()}{" "}
        </Row>{" "}
      </div>
    );
  }
}

export default Content;
