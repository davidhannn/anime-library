import React, { Fragment, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, withRouter, useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AnimeContext from "../../context/anime/animeContext";

const Navbar = ({ title, icon }) => {
  let history = useHistory();
  const [text, setText] = useState("");

  const authContext = useContext(AuthContext);
  const animeContext = useContext(AnimeContext);

  const { isAuthenticated, logout, user } = authContext;
  const { animeList, searchAnime } = animeContext;

  const onLogout = () => {
    logout();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("please enter anime");
    } else {
      // animeContext.searchAnime(text);
      setText("");
      history.push(`/search/${text}`);
    }
  };

  const onChange = (e) => setText(e.target.value);

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li className="search-icon">
        <form action="/search" className="searchbar" onSubmit={onSubmit}>
          <input
            value={text}
            onChange={onChange}
            input="text"
            type="text"
            placeholder="Search Anime..."
            aria-label="Search"
          />
          <input type="submit" name="" value="search" />
        </form>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <h2>AniLib</h2>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Anime Library",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
