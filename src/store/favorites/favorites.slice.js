import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
	name: "Favorite",
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: recipe }) => {

			const isExists = state.some((r) => r.id === recipe.id);
			if (isExists) {
				return state.filter((r) => r.id !== recipe.id);
			} else {
				state.push(recipe);
				return state;
			}
		},

	},
});

export const favoriteReducer = favoriteSlice.reducer;
export const { actions, payload } = favoriteSlice
