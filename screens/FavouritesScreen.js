import React from 'react'
import MealList from '../components/Meal/MealList'
import {FavoritesContext} from "../store/context/favorites-context"
import { useContext } from 'react'
import { MEALS } from '../data/dummy-data'

export const FavouritesScreen = () => {

  const FavoritesCtx = useContext(FavoritesContext);

  const meals = MEALS.filter(meal => FavoritesCtx.ids.includes(meal.id))

  return (
    <MealList items={meals} />
  )
}

export default FavouritesScreen;