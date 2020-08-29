import { SEARCH_ANIME } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ANIME:
      return {
        ...state,
        animeList: action.payload,
      };
    default:
      return state;
  }
};
