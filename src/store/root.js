import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favorites/favorites.slice";

const reducers = combineReducers({
  favorites: favoriteReducer,
});

export const store = configureStore({
  reducer: reducers, 
  devTools: true,
});
