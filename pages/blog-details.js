import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import BlogContent from "../components/blog-content";
import Comment from "../components/comment";
import CommentForm from "../components/comment-form";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Blog Details Page || Opins React Next Template">
      <InnerHeader />
      <PageHeader title="Blog Details" crumbtext="Blog Details" />
      <section className="blog-details-page">
        <Container>
          <Row>
            <Col lg={8}>
              <BlogContent />
              <Comment />
              <CommentForm />
            </Col>
            <Col lg={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default BlogDetails;
