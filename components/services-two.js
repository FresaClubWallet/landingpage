import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./cards/service-card";
import BlockSerice from "./block-service";
import serviceImage4 from "../assets/images/service-4.png";
import serviceImage5 from "../assets/images/service-5.png";
import serviceImage6 from "../assets/images/service-6.png";
import serviceImage7 from "../assets/images/service-7.png";
import blockTitleCircle from "../assets/images/round-circle-1-8.png";

const BLOG_DATA = [
  {
    image: serviceImage4,
    title: "Shop",
    text:
      "Daily discounts at local markets, convenience stores and community healthcare providers.",
  },
  {
    image: serviceImage5,
    title: "Eat",
    text:
      "Empowers unbanked food/market vendors with a DeFi Point of Sale system offering secret menu items to the community.",
  },
  {
    image: serviceImage6,
    title: "Send",
    text:
      "Payments & transfers arrive within seconds of joining FresaClub. Transaction fees as low as .02 cents.",
  },
  {
    image: serviceImage7,
    title: "Earn",
    text:
      "Fresaclub offers 5% annually on cUSD/cEUR in your account. \
      No minimum balance needed to grow your business or personal balance sheet.",
  }
];
const ServicesOne = () => {
  return (
    <section className="blog-style-one" id="blog">
      <Container>
      <BlockSerice
          textAlign="center"
          image={blockTitleCircle}
          title={`Check out our latest \n news & articles.`}
          content={`Whether you need to send money to family for a healthy meal, 
          pay for a basic health check-up service, or get the best deal on healthy consumer products and ingrediants. 
          Our rewards wallet will match you with the the best local partner, so you and your community thrive.
          `}
        />
        <Row>
          {BLOG_DATA.map(
            ({ image, title, text }, index) => (
              <Col key={`blog-card-${index}`} lg={3}>
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
