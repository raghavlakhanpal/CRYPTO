import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeList = ({ shoes }) => {
  return (
    <div className="shoe-list">
      {shoes[0].map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;
