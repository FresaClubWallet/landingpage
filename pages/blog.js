import React from "react";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import BlogPage from "../components/blog-page";
import Footer from "../components/footer";

const Blog = () => {
  return (
    <Layout pageTitle="Blog Page">
      <InnerHeader />
      <PageHeader title="Blog Listing" crumbtext="Blog Page" />
      <BlogPage />
      <Footer />
    </Layout>
  );
};

export default Blog;
