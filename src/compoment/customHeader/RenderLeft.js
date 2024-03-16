import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderLeft = () => {
  return (
    <View>
        <Image source={require("../../acsset/back.png")} style={styles.img}></Image>
    </View>
  )
}

export default RenderLeft

const styles = StyleSheet.create({
    img: {
        height:  20,
        width: 20,
    }
})