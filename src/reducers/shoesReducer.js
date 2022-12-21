import { FETCH_SHOES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SHOES:
      return [...state,action.payload];

    default:
      return state;
  }
};