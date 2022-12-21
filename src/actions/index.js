import shoesApi from "../apis/Api";

import { FETCH_SHOES } from "./types";

export const fetchShoes = () => async (dispatch) => {
  const response = await shoesApi.get("/search/photos", {
    params: { query: "shoes", per_page: 30 },
  });

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
  const filteredData = transformApiDataToState(response.data.results);

  dispatch({ type: FETCH_SHOES, payload: filteredData });
};
