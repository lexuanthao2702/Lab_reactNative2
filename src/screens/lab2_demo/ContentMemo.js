import { StyleSheet, Text, View } from 'react-native'
import React,{memo} from 'react'

 function ContentMemo({conuter1}) {
    console.log("ContentMemo re-render")
  return (
    <View>
      <Text style={styles.text}>Demo react memo</Text>
    </View>
  )
}

export default memo(ContentMemo);

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: "blue",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
})