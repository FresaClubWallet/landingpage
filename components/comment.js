import React from "react";

import commentImage1 from "../assets/images/comment-1-1.jpg";
import commentImage2 from "../assets/images/comment-1-2.jpg";

const Comment = () => {
  return (
    <div className="comment-block">
      <div className="title-line">
        <h3>2 Comments</h3>
      </div>
      <div className="single-comment-one">
        <div className="image-block">
          <div className="inner-block">
            <img src={commentImage1} alt="comment image" />
          </div>
        </div>
        <div className="text-block">
          <div className="top-block">
            <div className="left-block">
              <h3>Jessica Brown</h3>
              <span className="date-line">
                20 April, 2019 <span className="sep">.</span> 4:00 pm
              </span>
            </div>
            <div className="right-block">
              <a href="#" className="reply-btn">
                Reply
              </a>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the rinting and typesetting been
            the industry standard dummy text ever sincer condimentum purus. In
            non ex at ligula fringilla lobortis et not the aliquet.
          </p>
        </div>
      </div>
      <div className="single-comment-one">
        <div className="image-block">
          <div className="inner-block">
            <img src={commentImage2} alt="comment image" />
          </div>
        </div>
        <div className="text-block">
          <div className="top-block">
            <div className="left-block">
              <h3>Jessica Brown</h3>
              <span className="date-line">
                20 April, 2019 <span className="sep">.</span> 4:00 pm
              </span>
            </div>
            <div className="right-block">
              <a href="#" className="reply-btn">
                Reply
              </a>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the rinting and typesetting been
            the industry standard dummy text ever sincer condimentum purus. In
            non ex at ligula fringilla lobortis et not the aliquet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
