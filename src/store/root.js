import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favorites/favorites.slice"; 

export const store = configureStore({
	reducer: favoriteReducer, 
	devTools: true,
});
