import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header-one";
import BannerOne from "../components/banner-one";
import FunFact from "../components/funfact";
import ServicesOne from "../components/services-one";
import ServicesTwo from "../components/services-two";
import FeatureOne from "../components/feature-one";
import FeatureTwo from "../components/feature-two";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import Brands from "../components/brands";
import FAQ from "../components/faq";
import BlogHome from "../components/blog-home";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Layout pageTitle="FresaClub">
      <HeaderOne />
      <BannerOne />
      {/* <FunFact /> */}
      <ServicesOne />
      {/* <FeatureTwo /> */}
      <FeatureOne />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Brands /> */}
      {/* <BlogHome /> */}
      <ServicesTwo />
      <Subscribe />
      {/* <FAQ /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
