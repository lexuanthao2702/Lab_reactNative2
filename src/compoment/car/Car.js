import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Car({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9
}) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text >{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
      <Text style={styles.textTitle}>{text3}</Text>
      <Text style={styles.text}>{text4}</Text>
      <Text style={styles.textTitle}>{text5}</Text>
      <Text style={styles.text}>{text6}</Text>
      <Text style={styles.textTitle}>{text7}</Text>
      <Text style={styles.text}>{text8}</Text>
      <Text style={styles.textTitle}>{text9}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    marginTop: 10
  },
  textTitle: {
    marginTop: 10
  }
});
