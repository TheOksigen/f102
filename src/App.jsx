import React from 'react'
import RecipeItem from './recipe-item/RecipeItem'
import FavList from './recipe-item/FavList'
import { useSelector } from 'react-redux'

const App = () => {
  const { favorites } = useSelector(state => state)


  return (
    <div>
      <header>
        <div>{favorites.length}</div>
      </header>
      <RecipeItem recipe={{
        id: 1,
        name: "Doner"
      }} />
      <RecipeItem recipe={{
        id: 2,
        name: "Bozbas"
      }} />
      <RecipeItem recipe={{
        id: 3,
        name: "Dolma"
      }} />
      <FavList />
    </div>
  )
}

export default App