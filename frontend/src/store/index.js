import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import podcastReducer from "./podcast";
import sessionReducer from "./session";
import episodeReducer from "./episode";
import followerReducer from "./follower";
import userReducer from "./user";


const rootReducer = combineReducers({
  session: sessionReducer,
  podcast: podcastReducer,
  episode: episodeReducer,
  user: userReducer,
  follower: followerReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};



export default configureStore;
