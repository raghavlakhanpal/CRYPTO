//libraries
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//api
import shoesApi from "../apis/Api";

//components
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";

//filtering api-data
const transformApiDataToState = (apiData) => {
  return apiData.map((data) => {
    return {
      id: data.id,
      shoeName: data.user.location === null ? "Anonymous" : data.user.location,
      shoeStyle: data.user.name === null ? "Adidas" : data.user.name,
      color: data.color,
      url: data.urls.regular,
      description:
        data.description === null ? "No Description" : data.description,
      cost: data.likes,
      date: data.updated_at,
      unsplashLink: data.links.html,
      sellerName:
        data.user.instagram_username === null
          ? "Anonymous"
          : data.user.instagram_username,
      sellerImage: data.user.profile_image.medium,
      tags: data.tags,
    };
  });
};

//------------------Main Parent Component--------------------------------
const App = () => {
  const [data, setData] = useState([]);
  //Fetch data from Api
  const fetchData = async () => {
    const response = await shoesApi.get("/search/photos", {
      params: { query: "shoes", per_page: 30 },
    });
    setData(transformApiDataToState(response.data.results));
  };
  //runs only once
  useEffect(() => {
    fetchData();
  }, []);

  //passing callback function to products page
  const getProductById = (id) => {
    return data.find((shoe) => shoe.id == id);
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage data={data} />} />
          <Route
            path="/products/:productId"
            element={
              <ProductPage productData={data} getProductById={getProductById} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
