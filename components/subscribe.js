import React from "react";
import { Container } from "react-bootstrap";

const Subscribe = () => {
  return (
    <section className="subscribe-style-one">
      <Container>
        <h3 className="text-center">
          Subscribe now to get <br /> company news.
        </h3>
        <form className="subscribe-form contact-form-vaidated">
          <input type="text" name="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <div className="result"></div>
      </Container>
    </section>
  );
};

export default Subscribe;
