import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import BlockTitle from "./block-title";
import mapImage from "../assets/images/map-1-1.png";
import blockTitleCircle from "../assets/images/round-circle-1-6.png";
import testimonialImage1 from "../assets/images/testi-1-1.jpg";
import testimonialImage2 from "../assets/images/testi-1-2.jpg";
import testimonialImage3 from "../assets/images/testi-1-3.jpg";
import testimonialImage4 from "../assets/images/testi-1-4.jpg";
import testimonialImage5 from "../assets/images/testi-1-5.jpg";
import testimonialImage6 from "../assets/images/testi-1-6.jpg";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    title: "Delila Rayam",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage1
  },
  {
    title: "Evelyn Holt",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage2
  },
  {
    title: "Edward Higgins",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage3
  },
  {
    title: "Timothy Estrada",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage4
  },
  {
    title: "Jesse Lyons",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage5
  },
  {
    title: "Mabelle Boone",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage6
  }
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const testimonialsCarouselOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsThumOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonials-style-one" id="testimonials">
      <img src={mapImage} alt="Awesome Image" className="map-img" />
      <Container>
        <Row>
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div id="testimonials-slider-pager">
                <div className="testimonials-slider-pager-one">
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <span key={index} className="pager-item">
                      <img src={image} alt="Awesome Image" />
                    </span>
                  ))}
                </div>
                <Swiper
                  {...testimonialsThumOption}
                  className="testimonials-slider-pager-two"
                  onSwiper={setThumbsSwiper}
                >
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="Awesome Image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <BlockTitle
              textAlign="left"
              image={blockTitleCircle}
              title={`What’s our clients are \n saying.`}
            />

            <Swiper
              {...testimonialsCarouselOption}
              thumbs={{ swiper: thumbsSwiper }}
              className="slider testimonials-slider"
            >
              {TESTIMONIALS_DATA.map(({ title, content }, index) => (
                <SwiperSlide
                  key={`testimonials-card-${index}`}
                  className="slide-item"
                >
                  <div className="single-testi-one">
                    <p>{content}</p>
                    <h3>{title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
