import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./cards/service-card";
import BlockSerice from "./block-service";
import serviceImage1 from "../assets/images/service-1.png";
import serviceImage2 from "../assets/images/service-2.png";
import serviceImage3 from "../assets/images/service-3.png";
import blockTitleCircle from "../assets/images/round-circle-1-8.png";

const BLOG_DATA = [
  {
    image: serviceImage1,
    title: "Access for all",
    text:
      "Everyone deserves access to healthy meals, products and services. \
      Our wallet makes it easy to pay, send money or split payments with family and friends \
      - GLOBALY using their phone numbers.",
  },
  {
    image: serviceImage2,
    title: "Food is universal",
    text:
      "Our focus is empowering underserved and unbanked BIPOC business owners \
      through our DeFi Point of Sale wallet on the Celo blockchain accepting cUSD and cEUR stablecoins.",
  },
  {
    image: serviceImage3,
    title: "Prosperity",
    text:
      "FresaClub offers 5% annually on every Celo Dollar (cUSD) or Celo Euro (cEUR) in your account. No minimums.\
       No commitments. Your money grows, as your community thrives.",
  }
];
const ServicesOne = () => {
  return (
    <section className="blog-style-one" id="blog">
      <Container>
      <BlockSerice
          textAlign="center"
          title={`Features`}
        />
        <Row>
          {BLOG_DATA.map(
            ({ image, title, text }, index) => (
              <Col key={`blog-card-${index}`} lg={4}>
                <ServiceCard
                  image={image}
                  title={title}
                  text={text}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesOne;
