import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-3.png";
import mocup from "../assets/images/moc-1-2.png";

const FeatureOne = () => {
  return (
    <section className="feature-style-one">
      <Container>
        <hr className="style-one" />
        <Row>
          <Col lg={6}>
            <div className="content-block">
              <BlockTitle
                textAlign="left"
                image={blockTitleCircle}
                title={`Powerful tools for your \n customers.`}
              />
              <p>
                Duis aute irure dolor in reprehenderit in voluptate <br /> velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="feature-lists">
                <li>
                  <i className="fa fa-check"></i> Refresing to get such a
                  personal touch.{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate.
                </li>
                <li>
                  <i className="fa fa-check"></i> Velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </li>
              </ul>
              <a href="#" className="feature-btn">
                Learn More
              </a>
            </div>
          </Col>

          <Col lg={6}>
            <div className="image-block">
              <img src={mocup} alt="Awesome Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureOne;
