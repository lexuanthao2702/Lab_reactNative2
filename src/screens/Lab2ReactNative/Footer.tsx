import {StyleSheet, Text, View} from 'react-native';
import React, { FC, memo } from 'react';

type footerType = {
  timeUpdate: string;
  backgroundColor: string;
};

const Footer:FC<footerType> = memo(props => {
    const {timeUpdate, backgroundColor} = props;
    console.log('re-render header');
    return (
      <View style={containerStyle({height: 100, backgroundColor: backgroundColor, alignItem: "center", justifyContent: "center"})}>
        <Text style={styles.text}>Thời gian Update {timeUpdate}</Text>
      </View>
    );
  })

export default Footer;

const styles = StyleSheet.create({
  container: {},
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

const containerStyle = (props: any) => ({
  ...props  
})