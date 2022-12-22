import React from "react";
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";


//component
const ShoeCard = (props) => {
  const navigate = useNavigate();

  //change DAte Time Format
  const createDateTimeFormat = (dateTime) => {
    const dt = dayjs(dateTime);
    return dt.format("DD.MM.YYYY");
  };

  //profiling the data from props
  const { description, url, id, color, shoeName, shoeStyle, cost, date } =
    props.shoe;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        navigate(`/products/${id}`);
      }}
      className="shoe-container"
      style={{ backgroundColor: color }}
    >
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
        <span className="shoe-info-name">{shoeName}</span>
        <span className="shoe-info-style">{shoeStyle}</span>
        <span className="shoe-info-price">{`${cost / 100} ETH`}</span>
      </div>
    </div>
  );
};

export default ShoeCard;
