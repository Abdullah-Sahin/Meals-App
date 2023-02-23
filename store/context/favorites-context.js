import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (mealId) => {},
  removeFavorite: (mealId) => {}
});

function FavoritesContextProvider({children}) {
  const [mealIds, setMealIds] = useState([]);

  function addToFavorites(mealId) {
    try {
      setMealIds((currentIds) => [...currentIds, mealId]);
      return 0;
    } catch (error) {
      return -1;
    }
  }

  function removeFromFavorites(mealId) {
    try {
      setMealIds((currentIds) => currentIds.filter(mealId => mealId !== mealId));
      return 0;
    } catch (error) {
      return -1;
    }
  }

  const contextValues = {
    ids: mealIds,
    addFavorite: addToFavorites,
    removeFavorite: removeFromFavorites
  }

  return <FavoritesContext.Provider value={contextValues}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
