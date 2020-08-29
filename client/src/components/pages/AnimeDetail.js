import React, { Fragment, useState, useEffect } from "react";
import fetch from "node-fetch";
import Favorite from "./Section/Favorite";
import Review from "./Section/Review";

const AnimeDetail = ({ match }) => {
  const [animeInfo, setAnimeInfo] = useState([]);
  // const [characters, setCharacters] = useState([]);
  const [ReviewList, setReviewList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/anime/${match.params.id}`);
      const json = await response.json();
      // const characterRelationships = await fetch(
      //   json.data.relationships.animeCharacters.links.related
      // );

      // console.log(characterRelationships);
      setAnimeInfo(json.data);
    }

    fetchData();
  }, []);

  console.log(animeInfo);

  //   const {
  //     attributes: {
  //       canonicalTitle,
  //       averageRating,
  //       ageRating,
  //       episodeCount,
  //       episodeLength,
  //       favoritesCount,
  //       popularityRank,
  //       ratingRank,
  //       status,
  //       synopsis,
  //     },
  //   } = animeInfo && animeInfo;

  const updateReview = (newReview) => {
    setReviewList(ReviewList.concat(newReview));
  };
  const { attributes, relationships } = animeInfo;
  return (
    <Fragment>
      {attributes && (
        <div className="anime-detail-page-container">
          <div className="anime-detail-poster">
            <img src={attributes.posterImage.medium} />
          </div>

          <div className="anime-detail-info">
            <div className="anime-detail-info__top">
              <h2>{attributes.canonicalTitle}</h2>
              <p>Score: {attributes.averageRating}</p>
              <p>Ranked: #{attributes.popularityRank}</p>
              <p>Rating: {attributes.ageRating}</p>
              <p>Type: {attributes.subtype}</p>
              <p>Status: {attributes.status}</p>
              <p>Episodes: {attributes.episodeCount}</p>
              <p>Episode Length: {attributes.episodeLength}</p>
            </div>

            <div className="anime-detail-info__bottom">
              <h3>Synopsis</h3>
              <p>{attributes.synopsis}</p>
            </div>

            <div className="favoriteButton">
              <Favorite
                userFrom={localStorage.getItem("userId")}
                animeId={attributes.id}
                animeInfo={attributes}
              />
            </div>

            <div className="ReviewSection">
              <Review
                ReviewList={ReviewList}
                id={attributes.id}
                refreshFunction={updateReview}
              />
            </div>
            <div className="anime-detail-characters"></div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AnimeDetail;
