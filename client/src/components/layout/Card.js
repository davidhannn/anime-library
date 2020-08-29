import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = ({
  details: {
    attributes: {
      canonicalTitle,
      posterImage,
      averageRating,
      episodeCount,
      status,
    },
    id,
  },
}) => {
  return (
    <Fragment>
      <div className="card">
        <Link to={`/anime/${id}`}>
          <img className="card__img" src={posterImage.medium} />
          <div className="card__overlay">
            <div className="card__title">{canonicalTitle}</div>
            <div className="card__rating">Rating: {averageRating}</div>
            <div className="card__episodes">Episodes: {episodeCount}</div>
            <div className="card__status">Status: {status}</div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Card;
