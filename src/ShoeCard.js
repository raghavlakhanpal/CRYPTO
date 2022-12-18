import React from "react";

import dayjs from "day";
class ShoeCard extends React.Component {
  // createDateTimeFormat=(dateTime)=>{
  //   const dt=dayjs(dateTime);
  //   return dt.format('DD.MM.YYY');
  // }
  prettifyDate(value) {
    return value.substring(0, 10);
  }
  render() {
    const { description, urls, id, color, user, likes, updated_at } =
      this.props.shoe;

    return (
      <div className="shoe-container" style={{ backgroundColor: color }}>
        <div className="shoe-header">
          <span className="shoe-id">{`#${id}`}</span>
          <span className="shoe-manufacture-date">
            {/* {this.createDateTimeFormat(updated_at)} */}
            {this.prettifyDate(updated_at)}
          </span>
        </div>
        <div className="shoe-content">
          <img alt={description} src={urls.regular} />
        </div>
        <div className="shoe-info">
          <div className="shoe-info-name">{user.location}</div>
          <div className="shoe-info-style">{user.name}</div>
          <div className="shoe-info-price">{`${likes / 100} ETH`}</div>
        </div>
      </div>
    );
  }
}
export default ShoeCard;
