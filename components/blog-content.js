import React from "react";
import postImage from "../assets/images/blog-s-1-1.png";
import authorImage from "../assets/images/author-1-1.jpg";

const BlogContent = () => {
  return (
    <>
      <div className="single-blog-style-one">
        <div className="image-block">
          <div className="inner-block">
            <img src={postImage} alt="Awesome Image" />
            <div className="date-block">30 April, 2019</div>
          </div>
        </div>
        <div className="text-block">
          <div className="meta-info">
            <a href="#">By Admin</a>
            <span className="sep">.</span>
            <a href="#">2 Comments</a>
          </div>
          <h3 className="post-title">
            Pre and post launch mobile app marketing pitfalls to avoid
          </h3>
          <p>
            There are many variations of passages of available but majority have
            alteration in some by inject humour or random words. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like.
          </p>
        </div>
      </div>
      <div className="share-block">
        <div className="left-block">
          <p>
            Tags: <a href="#">Business,</a> <a href="#">Agency,</a>{" "}
            <a href="#">Technology</a>
          </p>
        </div>
        <div className="social-block">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
        </div>
      </div>
      <div className="author-block">
        <div className="image-block">
          <img src={authorImage} alt="Awesome Image" />
        </div>
        <div className="text-block">
          <h3>Christine Eve</h3>
          <p>
            Lorem Ipsum is simply dummy text of the rinting and typesetting been
            the industry standard dummy text ever sincer condimentum purus. In
            non ex at ligula fringilla lobortis et not the aliquet.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
