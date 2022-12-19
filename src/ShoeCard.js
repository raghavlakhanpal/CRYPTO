import React from "react";

import dayjs from "dayjs";

const ShoeCard = (props) => {
  //change DAte Time Format
  const createDateTimeFormat = (dateTime) => {
    const dt = dayjs(dateTime);
    return dt.format("DD.MM.YYYY");
  };

  //profiling the data from props
  const { description, url, id, color, shoename, shoestyle, cost, date } =
    props.shoe;

  return (
    <div className="shoe-container" style={{ backgroundColor: color }}>
      <div className="shoe-header">
        <span className="shoe-id">{`#${id}`}</span>
        <span className="shoe-manufacture-date">
          {createDateTimeFormat(date)}
        </span>
      </div>
      <div className="shoe-content">
        <img alt={description} src={url} />
      </div>
      <div className="shoe-info">
        <span className="shoe-info-name">{shoename}</span>
        <span className="shoe-info-style">{shoestyle}</span>
        <span className="shoe-info-price">{`${cost / 100} ETH`}</span>
      </div>
    </div>
  );
};

export default ShoeCard;
