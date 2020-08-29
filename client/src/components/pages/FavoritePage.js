import React, { useEffect, useState } from "react";
import axios from "axios";
import animeContext from "../../context/anime/animeContext";

const FavoritePage = () => {
  const variables = { user: localStorage.getItem("userId") };

  const [FavoritedAnime, setFavoritedAnime] = useState([]);
  useEffect(() => {
    axios.post("/favorite/getFavoritedAnime", variables).then((response) => {
      if (response.data.success) {
        setFavoritedAnime(response.data.favorites);
      } else {
        alert("Failed to get favorite video");
      }
    });
  }, []);

  const renderTableBody = FavoritedAnime.map((anime, index) => {
    return (
      <tr>
        <td>{anime.canonicalTitle}</td>
        <td></td>
        <td>
          <button>Remove from the Favorites</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h3>Favorite Anime List</h3>
      <hr />

      <table>
        <thead>
          <tr>
            <tr>Anime Title</tr>
            <tr>Anime Runtime</tr>
            <tr>Remove from favorites</tr>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
};

export default FavoritePage;
