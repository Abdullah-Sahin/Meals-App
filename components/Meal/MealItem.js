import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";

function MealItem(props){
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

  const widthR =
    windowType === "1" || windowType === "3" ? width * 0.8 : width * 0.7;
  const heightR =  windowType === "1" || windowType === "3" ? widthR * 1.25: widthR
  const borderRadius = widthR * 0.05;
  const titleFontSize = windowType === "1" || windowType === "2" ? 24 : 36;
  const detailFontSize = titleFontSize * 0.6;
  const padding = detailFontSize;

  return (
    <View
      style={[
        styles.outerContainer,
        { width: widthR, height: heightR, padding: padding },
      ]}
    >
      <Pressable style={styles.button} onPress={props.onPress}>
        <View style={[styles.innerContainer, { borderRadius: borderRadius }]}>
          <View style={[styles.titleContainer, {height: heightR * 0.15}]}>
            <Text
              style={[
                styles.title,
                { fontSize: titleFontSize},
              ]}
            >
              {props.title}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{
                uri: props.imageUrl,
              }}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={[styles.detail, { fontSize: detailFontSize }]}>
              {props.complexity}
            </Text>
            <Text style={[styles.detail, { fontSize: detailFontSize }]}>
              {props.affordability}
            </Text>
            <Text style={[styles.detail, { fontSize: detailFontSize }]}>
              {props.duration} minutes
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    overflow: Platform.OS === "android" ? "hidden" : null,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderColor: "#1b0808",
    borderWidth: 0.4,
    overflow: "hidden",
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: "#9a099f"
  },
  title: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    color: "#fca3ff"
  },
  imageContainer: {
    width: "100%",
    height: "75%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9a099f"
  },
  detail: {
    textAlign: "center",
    color: "#e4dae48e",
    flex: 1,
  },
});

export default MealItem;
