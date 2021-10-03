import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";

const FUNFACT_DATA = [
  {
    count: 4789,
    text: "Downloads"
  },
  {
    count: 6400,
    text: "Likes"
  },
  {
    count: 900,
    text: "5 Star Rating"
  },
  {
    count: 266,
    text: "Awards"
  }
];

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="fun-fact-style-one">
      <Container>
        <h3 className="title-line">Numbers Speaks Everything</h3>
        <Row>
          {FUNFACT_DATA.map(({ text, count }, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <div className="single-funfact-one text-center">
                <h3 className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? count : 0} />
                  </VisibilitySensor>
                </h3>
                <p>{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFact;
