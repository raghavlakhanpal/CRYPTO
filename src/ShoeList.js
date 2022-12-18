import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeList = (props) => {
  const shoecards = props.shoes.map((shoe) => {
    return <ShoeCard key={shoe.id} shoe={shoe} />;
  });
  return <div className="shoe-list">{shoecards}</div>;
};

export default ShoeList;
