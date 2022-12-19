import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeList = (props) => {
  return (
    <div className="shoe-list">
      {props.shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;
