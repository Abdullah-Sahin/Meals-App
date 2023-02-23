import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import CustomList from "../components/CustomList";
import ListItem from "../components/ListItem";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

const SingleMealScreen = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const windowType =
    width < 500 && height < 1000
      ? "1"
      : width < 1000 && height < 500
      ? "2"
      : width < 1000 && width >= 500 && height < 1400 && height >= 1000
      ? "3"
      : width < 1400 && width >= 1000 && height < 1000 && height >= 500
      ? "4"
      : "else";
  const mealId = route.params.id;
  const meal = MEALS.find((item) => item.id === mealId);
  const fontSize = windowType === "1" || windowType === "2" ? 18 : 24;
  const fontSizeExtra = fontSize * 0.9;
  const isGlutanFree = meal.isGlutenFree;
  const isVegan = meal.isVegan;
  const isVegetarian = meal.isVegetarian;
  const isLactoseFree = meal.isLactoseFree;

  const FavoritesCtx = useContext(FavoritesContext);
  const isFavorite = FavoritesCtx.ids.includes(mealId);

  function pressHandler() {
    if (!isFavorite) {
      FavoritesCtx.addFavorite(mealId);
    } else {
      FavoritesCtx.removeFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Details",
      headerTitleAlign: "center",
      headerRight: () => (
        <IconButton
          icon={isFavorite ? "md-heart" : "md-heart-outline"}
          color="white"
          size={24}
          onPress={pressHandler}
        />
      ),
    });
  }, [meal, navigation, FavoritesCtx, isFavorite]);

  const imageHeight =
    windowType === "1" || windowType === "3" ? height * 0.2 : height * 0.3;

  return (
    <View style={styles.rootContainer}>
      <View
        style={[
          styles.imageContainer,
          {
            height: imageHeight,
            overflow: "hidden",
          },
        ]}
      >
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: meal.imageUrl }}
        />
      </View>
      <Text style={{color: "#662b6a", fontSize: 30, textAlign: "center"}}>{meal.title.toUpperCase()}</Text>
      <View style={styles.scrollOut}>
        <ScrollView>
          <View style={styles.body}>
            <CustomList title="ingredients">
              {meal.ingredients.map((ingredient) => {
                return <ListItem key={ingredient}>{ingredient}</ListItem>;
              })}
            </CustomList>
            <CustomList title="steps">
              {meal.steps.map((step) => {
                return <ListItem key={step}>{step}</ListItem>;
              })}
            </CustomList>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        {isGlutanFree && (
          <Text style={[styles.extra, { fontSize: fontSizeExtra }]}>
            GlutanFree
          </Text>
        )}
        {isVegan && (
          <Text style={[styles.extra, { fontSize: fontSizeExtra }]}>Vegan</Text>
        )}
        {isVegetarian && (
          <Text style={[styles.extra, { fontSize: fontSizeExtra }]}>
            Vegetarian
          </Text>
        )}
        {isLactoseFree && (
          <Text style={[styles.extra, { fontSize: fontSizeExtra }]}>
            LactoseFree
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBttom: 15,
    paddingTop: 1,
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  scrollOut: {
    flex: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  extra: {
    textAlign: "center",
    fontWeight: "900",
    color: "#662b6a",
    marginHorizontal: 4,
  },
});

export default SingleMealScreen;
