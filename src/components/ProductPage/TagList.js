import React from "react";

import Tag from "./Tag";
const TagList = ({ tags }) => {
  return (
    <div className="tags-list">
      {tags.map((tag, index) => (
        <Tag key={index} tags={tag} />
      ))}
    </div>
  );
};
export default TagList;
