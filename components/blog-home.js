import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./cards/blog-card";
import BlockTitle from "./block-title";
import blogImage1 from "../assets/images/blog-1-1.png";
import blogImage2 from "../assets/images/blog-1-2.png";
import blogImage3 from "../assets/images/blog-1-3.png";
import blockTitleCircle from "../assets/images/round-circle-1-8.png";

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
  }
];
const BlogHome = () => {
  return (
    <section className="blog-style-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Check out our latest \n news & articles.`}
        />
        <Row>
          {BLOG_DATA.map(
            ({ image, author, date, comments, title, text, link }, index) => (
              <Col key={`blog-card-${index}`} lg={4}>
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
      </Container>
    </section>
  );
};

export default BlogHome;
