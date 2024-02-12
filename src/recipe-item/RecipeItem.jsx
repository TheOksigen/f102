import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorites.slice'


const RecipeItem = ({ recipe }) => {

	const { favorites } = useSelector(state => state)
	const dispatch = useDispatch()

	const isFavorite = favorites.some((r) => r.id === recipe.id);

	return (
		<div>
			<h2>{recipe.name}</h2>
			<button onClick={() => dispatch(actions.toggleFavorites(recipe))}>
				{isFavorite ? "Yemeyi sil" : "Yemeyi elva et"}

			</button>
		</div>
	)
}

export default RecipeItem