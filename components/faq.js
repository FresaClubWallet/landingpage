import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./block-title";
import AccordionCard from "./cards/accordion-card";
import blockTitleCircle from "../assets/images/round-circle-1-7.png";

const ACCORDION_DATA = [
  {
    status: true,
    content:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    title: "Pre and post launch mobile app marketing pitfalls to avoid"
  },
  {
    status: false,
    content:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    title: "Boostup your application traffic is just a step away"
  },
  {
    status: false,
    content:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    title: "How to update application new features"
  },
  {
    status: false,
    content:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    title: "How to connect with the support to improve app experience"
  }
];

const FAQ = () => {
  return (
    <section className="faq-style-one">
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`FAQ \n Want to ask something from us?`}
        />
        <div className="accrodion-grp faq-accrodion">
          {ACCORDION_DATA.map(({ status, title, content }, index) => (
            <AccordionCard
              key={`accordion-card-${index}`}
              status={status}
              title={title}
              content={content}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
