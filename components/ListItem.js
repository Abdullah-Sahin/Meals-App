import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 8,
        borderColor: "#288ac3",
        borderWidth: 0.7,
        borderRadius: 8,
        width: "100%",
    },
    text: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        fontSize: 16,
        fontWeight: "300",
        color: "#288ac3"
    }
})

export default ListItem