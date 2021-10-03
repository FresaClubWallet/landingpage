import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header-two";
import BannerTwo from "../components/banner-two";
import FunFact from "../components/funfact";
import Services from "../components/services";
import FeatureOne from "../components/feature-one";
import FeatureTwo from "../components/feature-two";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import Brands from "../components/brands";
import FAQ from "../components/faq";
import BlogHome from "../components/blog-home";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";

const HomeTwo = () => {
  return (
    <Layout pageTitle="Home One || Opins React Next Template">
      <HeaderTwo />
      <BannerTwo />
      {/* <FunFact /> */}
      <Services />
      <FeatureTwo />
      <FeatureOne />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Brands /> */}
      <FAQ />
      {/* <BlogHome /> */}
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default HomeTwo;
