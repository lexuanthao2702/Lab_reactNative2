import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState,useCallback} from 'react';
import ContentMemo from './ContentMemo';
import ContentCallBack from './ContentCallBack';

export default function Count_UseCallBack() {
  const [Couter, setCouter] = useState(1);
  const handleIncrease = () => {
    setCouter(prevCounter => prevCounter + 1);
  };

   return (
    <View style={styles.container}>
      <ContentCallBack handleIncrease={handleIncrease}></ContentCallBack>
      <Text style={styles.Text}>{Couter}</Text>
      {/* <Button
        title="Click"
        onPress={handleIncrease}
        style={styles.Button}
        color="red"></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: 500,
    height: 50,
    backgroundColor: 'pink',
    padding: 100,
  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
});
