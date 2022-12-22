import React from "react";

const Tag = ({ tags }) => {
  return (
    <div className="tag-box">
      <span className="tag-text">{`#${tags.title}`}</span>
    </div>
  );
};
export default Tag;
