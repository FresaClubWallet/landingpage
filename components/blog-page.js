import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostPagination from "../components/post-pagination";
import BlogCard from "./cards/blog-card";
import blogImage1 from "../assets/images/blog-1-1.png";
import blogImage2 from "../assets/images/blog-1-2.png";
import blogImage3 from "../assets/images/blog-1-3.png";
import blogImage4 from "../assets/images/blog-1-4.png";
import blogImage5 from "../assets/images/blog-1-5.png";
import blogImage6 from "../assets/images/blog-1-6.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Pre and post launch mobile app marketing pitfalls to avoid",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage2,
    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Social currency high perfor- mance keywords or",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage3,
    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage4,
    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Pre and post launch mobile app marketing pitfalls to avoid",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage5,
    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Social currency high perfor- mance keywords or",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage6,
    author: "Admin",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  }
];

const BlogPage = () => {
  return (
    <section className="blog-style-one blog-page" id="blog">
      <Container>
        <Row>
          {BLOG_DATA.map(
            ({ image, author, date, comments, title, text, link }, index) => (
              <Col key={`blog-card-${index}`} lg={4} md={6} sm={12}>
                <BlogCard
                  image={image}
                  author={author}
                  date={date}
                  comments={comments}
                  title={title}
                  text={text}
                  link={link}
                />
              </Col>
            )
          )}
        </Row>
        <PostPagination />
      </Container>
    </section>
  );
};

export default BlogPage;
