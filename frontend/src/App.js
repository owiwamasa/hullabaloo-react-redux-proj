import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import './index.css'
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage";
import PodcastPage from "./components/PodcastPage";
import ProfilePage from "./components/ProfilePage";
import EpisodePage from './components/EpisodePage'
import SearchResultsPage from "./components/SearchResults";
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';


function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <ScrollToTop />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/podcasts/:id'  >
            <PodcastPage />
          </Route>
          <Route path='/users/:id'>
            <ProfilePage />
          </Route>
          <Route path='/episodes/:id'>
            <EpisodePage />
          </Route>
          <Route path='/search'>
            <SearchResultsPage />
          </Route>
        </Switch>
      )
      }
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
