import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import SingleMealScreen from "./screens/SingleMealScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a105e" },
        headerTintColor: "#e6c9c9",
        drawerStyle: { backgroundColor: "#e6c9c9" },
        sceneContainerStyle: { backgroundColor: "#e6c9c9" },
        headerTitleAlign: "center",
        drawerInactiveTintColor: "#8c2a2a",
        drawerInactiveBackgroundColor: "",
        drawerActiveTintColor: "#e6c9c9",
        drawerActiveBackgroundColor: "#e17777",
      }}
    >
      <Drawer.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      ></Drawer.Screen>
      <Drawer.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#4a105e" },
              headerTintColor: "#e6c9c9",
              contentStyle: { backgroundColor: "#fac4c4" },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="MainCategoriesScreen"
              component={DrawerNavigatior}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CategoryMealsScreen"
              component={CategoryMealsScreen}
            />
            <Stack.Screen
              name="SingleMealScreen"
              component={SingleMealScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140d14",
  },
});
