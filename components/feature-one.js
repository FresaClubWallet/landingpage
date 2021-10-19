import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import blockTitleCircle from "../assets/images/round-circle-1-3.png";
// import mocup from "../assets/images/moc-1-3.png";
import mocup from "../assets/images/banner-moc-3.png";
import BlockSerice from "./block-service";

const FeatureOne = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="content-block">
              <BlockSerice
                textAlign="left"
                title={`No borders and \nno limits.`}
              />
              <p>
              FresaClub enables global payments and point of sale transactions for any food vendor, 
              business, relative or friend in over 80 countries with just a phone number.
              That means you can pay for churros in Spain, charge for a deep-dish pizza in Chicago, 
              split coffee with friends in Indonesia or send money to family in Latin America, all from your phone 
              without losing time or cash in transaction fees.
              </p>
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
