import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const AnimeSearch = ({ match }) => {
  const [animeInfo, setAnimeInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/search/${match.params.text}`);
      const json = await response.json();
      setAnimeInfo(json);
    }
    fetchData();
  }, [animeInfo]);

  console.log(animeInfo);

  return (
    <div className="anime-search-container">
      <h3>Search Results</h3>
      <div className="search-result-grid">
        {animeInfo.map((result) => (
          <div className="search-result-card">
            <Link to={`/anime/${result.id}`}>
              <div className="search-result-card__image">
                <img src={result.attributes.posterImage.medium} />
              </div>
            </Link>
            <div className="search-result-card__name">
              <h3>{result.attributes.canonicalTitle}</h3>
            </div>
            {/* <div className="search-result-row__description">
            <h3>{result.attributes.canonicalTitle}</h3>

            {result.attributes.showType === "TV" ? (
              <p>
                {result.attributes.showType}{" "}
                <span>{result.attributes.episodeCount} Ep</span>
              </p>
            ) : (
              <p>{result.attributes.showType}</p>
            )}

            <p>Ranking: {result.attributes.ratingRank}</p>
            <p>Favorite: {result.attributes.favoritesCount}</p>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeSearch;
