import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WrapInput from '../input/types'


const Bai3 = () => {
  return (
    <View style={styles.container}>
      <WrapInput></WrapInput>
      <WrapInput></WrapInput>
      <WrapInput></WrapInput>
      <WrapInput></WrapInput>
    </View>
  )
}

export default Bai3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
})