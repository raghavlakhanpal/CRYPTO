import React, { useState, useEffect } from "react";
//sub-components
import Header from "./Header";
import ShoeList from "./ShoeList";
import Spinner from "./Spinner";
//api
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
  //function to fetch data from api response
  const transformApiDataToState = (apiData) => {
    return apiData.map((data) => {
      return {
        id: data.id,
        shoename:
          data.user.location === null ? "Anonymous" : data.user.location,
        shoestyle: data.user.name === null ? "Adidas" : data.user.name,
        color: data.color,
        url: data.urls.regular,
        description:
          data.description === null ? "No Description" : data.description,
        cost: data.likes,
        date: data.updated_at,
      };
    });
  };

  //lifecycle on start only
  useEffect(() => {
    const fetchShoesList = async () => {
      const response = await shoesApi.get("/search/photos", {
        params: { query: "shoes", per_page: 30 },
      });

      const transformedData = transformApiDataToState(response.data.results);
      setShoes(transformedData);
    };
    fetchShoesList();
  }, []);

  //Conditional render
  return (
    <Layout>
      {shoes.length === 0 ? <Spinner /> : <ShoeList shoes={shoes} />}
    </Layout>
  );
};

export default App;
