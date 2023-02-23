import {
  View,
  Pressable,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

function CategoryItem({ title, color, onPress}) {
  
  const { width, height } = useWindowDimensions();

  const windowType =
  width < 500 && height < 1000
  ? '1'
  : width < 1000 && height < 500
  ? '2'
  : width < 1000 && width >= 500 && height < 1400 && height >= 1000
  ? '3'
  : width < 1400 && width >= 1000 && height < 1000 && height >= 500
  ? '4'
  : 'else';

  const widthR = windowType === "1" || windowType === "3" ? width*(2/5) : width * (3/10);
  const heightR = widthR;
  const padding = windowType === "1" || windowType === "2" ? 16 : 32;
  const margin = padding * 2 / 3;
  const fontSize = padding * 3 / 2;
  const textPadding = padding / 4;
  const borderRadius = widthR / 4;

  return (
    <View style={[styles.outerContainer, {width: widthR, height: heightR, margin: margin, backgroundColor: color, borderRadius: borderRadius}]}>
      <Pressable onPress={onPress} style={ (pressData) => pressData.pressed ? [styles.button, styles.ifPressed] : styles.button} android_ripple={{color: "#413535"}}>
        <View style={[styles.innerConatiner, {padding: padding, backgroundColor: color, borderRadius: borderRadius}]}>
          <Text style={[styles.text, {fontSize: fontSize, padding: textPadding}]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    overflow: Platform.OS === "android" ? "hidden" : null
  },
  button: {
    flex: 1
  },
  innerConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "600"
  },
  ifPressed: {
    opacity: 0.2
  }
});

export default CategoryItem;
