import { FlatList } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemMetaData) {
    function pressHandler() {
      navigation.navigate("CategoryMealsScreen", {
        categoryId: itemMetaData.item.id,
      });
    }

    return (
      <CategoryItem
        title={itemMetaData.item.title}
        color={itemMetaData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
