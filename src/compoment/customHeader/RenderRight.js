import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderRight = () => {
  return (
    <View>
       <Image source={require("../../acsset/user.png")} style={styles.img}></Image>
    </View>
  )
}

export default RenderRight

const styles = StyleSheet.create({
    img: {
        height:  20,
        width: 20,
    }
})