import React from "react";

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className="single-blog-style-one">
      <div className="image-block" style={{backgroundColor: "transparent"}}>
        <div className="inner-block" style={{boxShadow:"rgb(243 186 0 / 76%) 0px 12px 20px 0px"}}>
          <img src={image} alt="Awesome Image"  />
        </div>
      </div>
      <div className="text-block text-center">
        <div className="meta-info">
        </div>
        <h2 style={{color:"rgb(46, 51, 56)"}}>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
