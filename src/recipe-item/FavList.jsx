import React from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';

const FavList = () => {
	const { favorites } = useSelector((state) => state);
	
	return (
		<div>
			<h2>Favorites</h2>
			{favorites.map((item) => (
				<p key={item.id} recipe={item} >{item.name}</p>
			))}
		</div>
	);
};

export default FavList;
