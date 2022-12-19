import React from "react";

import dayjs from "dayjs";

const ShoeCard = (props) => {
  //change DAte Time Format
  const createDateTimeFormat = (dateTime) => {
    const dt = dayjs(dateTime);
    return dt.format("DD.MM.YYYY");
  };

  //profiling the data from props
  const { description, urls, id, color, user, likes, updated_at } = props.shoe;

  return (
    <div className="shoe-container" style={{ backgroundColor: color }}>
      <div className="shoe-header">
        <span className="shoe-id">{`#${id}`}</span>
        <span className="shoe-manufacture-date">
          {createDateTimeFormat(updated_at)}
        </span>
      </div>
      <div className="shoe-content">
        <img alt={description} src={urls.regular} />
      </div>
      <div className="shoe-info">
        <span className="shoe-info-name">{user.location}</span>
        <span className="shoe-info-style">{user.name}</span>
        <span className="shoe-info-price">{`${likes / 100} ETH`}</span>
      </div>
    </div>
  );
};

export default ShoeCard;
