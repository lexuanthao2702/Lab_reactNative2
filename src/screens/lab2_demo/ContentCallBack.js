import {StyleSheet, Text, View,Button} from 'react-native';
import React, {memo} from 'react';

function ContentCallBack({handleIncrease}) {
  console.log('ContentMemo re-render');
  return (
    <View>
      <Text style={styles.text}>Demo react callback</Text>
      <Button
        title="Click"
        onPress={handleIncrease}
        style={styles.Button}
        color="red"></Button>
    </View>
  );
}

export default memo(ContentCallBack);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
