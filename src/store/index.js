import { createStore, combineReducers } from "redux";
import { charactersReducer, moviesReducer } from "./reducers";

const rootReducer = combineReducers({
  characters: charactersReducer,
  movies: moviesReducer,
});

export default createStore(rootReducer);
