import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import './index.css'
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage";
import PodcastPage from "./components/PodcastPage";
import ProfilePage from "./components/ProfilePage";
import EpisodePage from './components/EpisodePage'


function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  const podcasts = useSelector(state => state.podcast.allPodcasts)
  const episodes = useSelector(state => state.episode.allEpisodes)
  const followers = useSelector(state => state.follower.allFollowers)
  const users = useSelector(state => state.user.allUsers)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/home'>
            <HomePage users={users} podcasts={podcasts} episodes={episodes} followers={followers} />
          </Route>
          <Route path='/podcasts/:id'  >
            <PodcastPage podcasts={podcasts} episodes={episodes} followers={followers} />
          </Route>
          <Route path='/users/:id'>
            <ProfilePage users={users} podcasts={podcasts} episodes={episodes} followers={followers} />
          </Route>
          <Route path='/episodes/:id'>
            <EpisodePage users={users} podcasts={podcasts} episodes={episodes} />
          </Route>
        </Switch>
      )
      }
    </>
  );
}

export default App;
