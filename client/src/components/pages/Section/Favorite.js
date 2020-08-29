import React, { useState, useEffect } from "react";
import axios from "axios";

const Favorite = (props) => {
  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  const variable = {
    user: props.userFrom,
    animeId: props.animeId,
    animeTitle: props.animeInfo.canonicalTitle,
    animeImage: props.animeInfo.posterImage.medium,
  };

  useEffect(() => {
    axios.post("/favorite/favoriteNumber", variable).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("Failed to get number");
      }
    });

    axios.post("/favorite/favorited", variable).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert("Failed to get favorite info");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (Favorited) {
      // When already added
      axios.post("/favorite/removeFromFavorite", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber - 1);
          setFavorited(!Favorited);
        } else {
          alert("Failed to add to remove from favorite");
        }
      });
    } else {
      // When not adding yet
      axios.post("/favorite/addToFavorite", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("Failed to add to favorites");
        }
      });
    }
  };

  return (
    <div>
      <button onClick={onClickFavorite}>
        {" "}
        {Favorited ? " remove from Favorite" : " Add to Favorite"}{" "}
        {FavoriteNumber}
      </button>
    </div>
  );
};

export default Favorite;
