import React, { useState, useEffect } from "react";
//import components
import Header from "./Header";
import ShoeList from "./ShoeList";
//import apis
import shoesApi from "./Api";

//-------- Display Functionality----------------------------------//
const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

//-------- Data Assignment----------------------------------//
const App = () => {
  //state
  const [shoes, setShoes] = useState([]);

  //lifecycle on start only
  useEffect(() => {
    const fetchShoesList = async () => {
      const response = await shoesApi.get("/search/photos", {
        params: { query: "shoes", per_page: 30 },
      });

      setShoes(response.data.results);
    };
    fetchShoesList();
  }, []);

  //Conditional render
  return (
    <Layout>
      {shoes.length === 0 ? (
        <div className="loader">Loading...</div>
      ) : (
        <ShoeList shoes={shoes} />
      )}
    </Layout>
  );
};

export default App;
