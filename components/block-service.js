import React from "react";

const BlockSerice = ({ textAlign, image, title, content }) => {
  return (
    <div className={`block-title text-${textAlign}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlockSerice;
