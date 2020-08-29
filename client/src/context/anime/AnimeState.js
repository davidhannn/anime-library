import React, { useReducer } from "react";
import AnimeContext from "./animeContext";
import animeReducer from "./animeReducer";

import { SEARCH_ANIME } from "../types";

const AnimeState = (props) => {
  const initialState = {
    animeList: [],
  };

  const [state, dispatch] = useReducer(animeReducer, initialState);

  // Search Anime
  const searchAnime = async (text) => {
    const response = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${text}%20`
    ).then((res) => res.json());

    dispatch({
      type: SEARCH_ANIME,
      payload: response,
    });
  };

  return (
    <AnimeContext.Provider
      value={{
        animeList: state.animeList,
        searchAnime,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};

export default AnimeState;
