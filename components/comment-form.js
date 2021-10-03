import React from "react";

const CommentForm = () => {
  return (
    <div className="reply-block">
      <div className="title-line">
        <h3>Leave A Comments</h3>
      </div>
      <form action="#" className="comment-form">
        <div className="row">
          <div className="col-lg-6">
            <input type="text" name="name" placeholder="Your Name" />
          </div>
          <div className="col-lg-6">
            <input type="text" name="email" placeholder="Your Email" />
          </div>
          <div className="col-lg-12">
            <textarea
              name="message"
              placeholder="Write here your message"
            ></textarea>
            <button type="submit">Submit Comment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
