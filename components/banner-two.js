import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moc from "../assets/images/banner-moc-1-2.png";

const bannertwo = () => {
  return (
    <section className="banner-style-one home-page-two" id="banner">
      <span className="bubble-1"></span>
      <span className="bubble-2"></span>
      <span className="bubble-3"></span>
      <span className="bubble-4"></span>
      <span className="bubble-5"></span>
      <span className="bubble-6"></span>
      <img src={moc} className="banner-mock" alt="Awesome Image" />
      <Container>
        <Row>
          <Col xl={6} lg={8}>
            <div className="content-block">
              <h3>
                Best Mobile App <br /> Template for your <br /> Business.
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in <br />{" "}
                culpa qui officia deserunt mollit lorem ipsum anim id est <br />{" "}
                laborum perspiciatis unde.
              </p>
              <div className="button-block">
                <a href="#" className="banner-btn">
                  <i className="fa fa-play"></i>
                  Get in<span>Google Play</span>
                </a>
                <a href="#" className="banner-btn">
                  <i className="fa fa-apple"></i>
                  Get in<span>Play Store</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default bannertwo;
