import React from "react";
import Spinner from "react-spinners/HashLoader";
export default () => {
  return (
    <>
      <div className="app-spinner">
        <Spinner size={50} />
        <span>loading...</span>
      </div>
    </>
  );
};
