import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealList = ({ items }) => {

  const navigation = useNavigation();

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("SingleMealScreen", {
        id: itemData.item.id,
      });
    }
    const item = itemData.item;
    const props = {
      id: item.id,
      categoryIds: item.categoryIds,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
      ingredients: item.ingredients,
      steps: item.steps,
      isGlutanFree: item.isGlutanFree,
      isVegan: item.isVegan,
      isVegetarian: item.isVegetarian,
      isLactoseFree: item.isLactoseFree,
    };
    return <MealItem onPress={pressHandler} {...props} />;
  }

  return (
    <View style={styles.mealsContainer}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    mealsContainer: {
      alignItems: "center",
      padding: 16,
      width: "90%",
      alignSelf: "center",
    },
  });

export default MealList;
