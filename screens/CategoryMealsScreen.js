import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/Meal/MealList";
import { useLayoutEffect } from "react";

const CategoryMealsScreen = ({ route, navigation }) => {
  
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find( (category) => category.id === categoryId ).title;
    navigation.setOptions({
      title: categoryTitle,
      headerTintColor: "#fecbcb",
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: "800"
      }
    });
  }, [categoryId, navigation])
  
  return (<MealList items={meals}/>);
}
  
export default CategoryMealsScreen;
