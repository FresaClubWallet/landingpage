import React from "react";

const PostPagination = () => {
  return (
    <div className="blog-post-pagination text-center">
      <a className="prev" href="#">
        <i className="fa fa-arrow-left"></i>
      </a>
      <a className="active" href="#">
        01
      </a>
      <a href="#">02</a>
      <a href="#">03</a>
      <a href="#">04</a>
      <a href="#">05</a>
      <a className="next" href="#">
        <i className="fa fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default PostPagination;
