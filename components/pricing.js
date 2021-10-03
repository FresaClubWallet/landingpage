import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-4.png";

const PRICING_MONTHLY_DATA = [
  {
    amount: "$20.00",
    extraClass: "basic-pack",
    name: "Basic Pack",
    tagLine: "No hidden charges!",
    button: [{ label: "Purchase", link: "#" }],
    options: [
      {
        label: "Extra features"
      },
      {
        label: "Lifetime free support"
      },
      {
        label: "Upgrate options"
      },
      {
        label: "Full access"
      }
    ]
  },
  {
    amount: "$30.00",
    name: "Professional Pack",
    extraClass: "pro-pack",
    tagLine: "No hidden charges!",
    button: [{ label: "Purchase", link: "#" }],
    options: [
      {
        label: "Extra features"
      },
      {
        label: "Lifetime free support"
      },
      {
        label: "Upgrate options"
      },
      {
        label: "Full access"
      }
    ]
  },
  {
    amount: "$40.00",
    extraClass: "biz-pack",
    name: "Business Pack",
    tagLine: "No hidden charges!",
    button: [{ label: "Purchase", link: "#" }],
    options: [
      {
        label: "Extra features"
      },
      {
        label: "Lifetime free support"
      },
      {
        label: "Upgrate options"
      },
      {
        label: "Full access"
      }
    ]
  }
];

const PRICING_YEARLY_DATA = [
  {
    amount: "$40.00",
    name: "Basic Pack",
    extraClass: "basic-pack",
    tagLine: "No hidden charges!",
    button: [{ label: "Purchase", link: "#" }],
    options: [
      {
        label: "Extra features"
      },
      {
        label: "Lifetime free support"
      },
      {
        label: "Upgrate options"
      },
      {
        label: "Full access"
      }
    ]
  },
  {
    amount: "$80.00",
    name: "Professional Pack",
    extraClass: "pro-pack",
    tagLine: "No hidden charges!",
    button: [{ label: "Purchase", link: "#" }],
    options: [
      {
        label: "Extra features"
      },
      {
        label: "Lifetime free support"
      },
      {
        label: "Upgrate options"
      },
      {
        label: "Full access"
      }
    ]
  },
  {
    amount: "$100.00",
    name: "Business Pack",
    extraClass: "biz-pack",
    tagLine: "No hidden charges!",
    button: [{ label: "Purchase", link: "#" }],
    options: [
      {
        label: "Extra features"
      },
      {
        label: "Lifetime free support"
      },
      {
        label: "Upgrate options"
      },
      {
        label: "Full access"
      }
    ]
  }
];

const Pricing = () => {
  return (
    <section className="pricing-style-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Choose plans which suits \n your needs.`}
        />

        <Tab.Container id="left-tabs-example" defaultActiveKey="monthly">
          <Nav className="nav nav-tabs tab-title">
            <Nav.Item>
              <Nav.Link eventKey="monthly">Monthly</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="yearly">Yearly</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="monthly">
              <Row>
                {PRICING_MONTHLY_DATA.map(
                  (
                    { amount, name, tagLine, button, options, extraClass },
                    index
                  ) => (
                    <Col lg={4} key={index}>
                      <div className={`single-pricing-one ${extraClass}`}>
                        <div className="top-block">
                          <span className="price">{amount}</span>
                          <span className="pack-name">{name}</span>
                          <div className="line"></div>
                        </div>
                        <ul className="feature-lists">
                          {options.map(({ label }, index) => (
                            <li key={index}>{label}</li>
                          ))}
                        </ul>
                        <div className="bottom-block">
                          {button.map(({ link, label }, index) => (
                            <a href={link} className="price-btn" key={index}>
                              {label}
                            </a>
                          ))}
                          <span className="tag-line">{tagLine}</span>
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="yearly">
              <Row>
                {PRICING_YEARLY_DATA.map(
                  (
                    { amount, name, tagLine, button, options, extraClass },
                    index
                  ) => (
                    <Col lg={4} key={index}>
                      <div className={`single-pricing-one ${extraClass}`}>
                        <div className="top-block">
                          <span className="price">{amount}</span>
                          <span className="pack-name">{name}</span>
                          <div className="line"></div>
                        </div>
                        <ul className="feature-lists">
                          {options.map(({ label }, index) => (
                            <li key={index}>{label}</li>
                          ))}
                        </ul>
                        <div className="bottom-block">
                          {button.map(({ link, label }, index) => (
                            <a href={link} className="price-btn" key={index}>
                              {label}
                            </a>
                          ))}
                          <span className="tag-line">{tagLine}</span>
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Pricing;
