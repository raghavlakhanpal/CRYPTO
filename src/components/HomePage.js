import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//components
import Header from "./Header";
import ShoeList from "./ShoeList";
import Spinner from "./Spinner";

//actions
import { fetchShoes } from "../actions";

//-------- Display Functionality----------------------------------//
const Layout = ({ children }) => {
  return (
    <div className="homepage">
      <Header />
      {children}
    </div>
  );
};

//-------- Data Assignment----------------------------------//
const HomePage = ({ fetchShoes, shoes }) => {
  //lifecycle on start only
  useEffect(() => {
    //calling the api
    fetchShoes();
  }, []);

  //Conditional render
  return (
    <Layout>
      {shoes.length === 0 ? <Spinner /> : <ShoeList shoes={shoes} />}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { shoes: state.shoes };
};

export default connect(mapStateToProps, { fetchShoes })(HomePage);
