import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RenderCenter ({title}){
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    }
})