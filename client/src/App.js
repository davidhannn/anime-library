import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import AnimeDetail from "./components/pages/AnimeDetail";
import AnimeSearch from "./components/pages/AnimeSearch";
import FavoritePage from "./components/pages/FavoritePage";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import AnimeState from "./context/anime/AnimeState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <AnimeState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/anime/:id" component={AnimeDetail} />
                  <Route exact path="/search/:text" component={AnimeSearch} />
                  <Route exact path="/favorite" component={FavoritePage} />
                </Switch>
              </div>
              <Footer />
            </Fragment>
          </Router>
        </AnimeState>
      </AlertState>
    </AuthState>
  );
};

export default App;
