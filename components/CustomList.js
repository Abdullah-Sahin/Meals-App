import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomList = ({title, children}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>{title.toString().toUpperCase()}</Text>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
        width: "90%",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 10
    },
    titleContainer: {
        width: "100%",
        borderBottomColor: "#145f8a",
        borderBottomWidth: 1,
        marginBottom: 8
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        color: "#145f8a",
        paddingHorizontal: 4,
        paddingVertical: 2
    }
})


export default CustomList