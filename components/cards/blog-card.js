import React from "react";
import Link from "next/link";

const BlogCard = ({ image, author, date, comments, title, text, link }) => {
  return (
    <div className="single-blog-style-one">
      <div className="image-block">
        <div className="inner-block">
          <img src={image} alt="Awesome Image" />
          <div className="date-block">{date}</div>
        </div>
      </div>
      <div className="text-block">
        <div className="meta-info">
          <Link href={link}>
            <a>By {author}</a>
          </Link>
          <span className="sep">.</span>
          <Link href={link}>
            <a>{comments}</a>
          </Link>
        </div>
        <h3>
          <Link href={link}>
            <a>{title}</a>
          </Link>
        </h3>
        <p>{text}</p>
        <div className="line-block"></div>
        <Link href={link}>
          <a className="more-link">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
