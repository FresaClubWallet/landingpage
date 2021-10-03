import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import brandImage1 from "../assets/images/brand-1-1.png";

const BRAND_DATA = [
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  },
  {
    image: brandImage1
  }
];

const Brands = () => {
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <section className="brand-style-one">
      <Container>
        <Swiper {...brandCarouselOptions} className="brand-carousel-one">
          {BRAND_DATA.map(({ image }, index) => (
            <SwiperSlide className="item" key={`brand-image-${index}`}>
              <img src={image} alt="Awesome Image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="style-one" />
      </Container>
    </section>
  );
};

export default Brands;
