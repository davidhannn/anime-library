import React, { Fragment, useState, useEffect, useContext } from "react";
import fetch from "node-fetch";
import Card from "../layout/Card";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const [trendingAnime, setTrendingAnime] = useState([]);

  useEffect(() => {
    authContext.loadUser();

    async function fetchData() {
      const response = await fetch(`/api`);
      const json = await response.json();
      setTrendingAnime(json);
    }

    fetchData();
  }, []);

  console.log(trendingAnime);
  return (
    <Fragment>
      <div className="trending-anime-container">
        <h3>Trending Anime</h3>

        <div className="card-container">
          {trendingAnime &&
            trendingAnime.map((anime, i) => <Card details={anime} key={i} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
