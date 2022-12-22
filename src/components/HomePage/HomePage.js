import React from "react";

//components
import Header from "./Header";
import ShoeList from "./ShoeList";
import Spinner from "../../Spinner";

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
const HomePage = ({ data }) => {
  //Conditional render
  return (
    <Layout>
      {data.length === 0 ? <Spinner /> : <ShoeList shoes={data} />}
    </Layout>
  );
};

export default HomePage;
