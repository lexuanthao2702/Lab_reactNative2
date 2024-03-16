import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RenderLeft from '../customHeader/RenderLeft';
import RenderRight from '../customHeader/RenderRight';
import RenderCenter from '../customHeader/RenderCenter';

const Header = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      {RenderLeft()}
      <RenderCenter title={"header"}/>
      {RenderRight()}
    </View>
    <View style={styles.container}>
      {RenderLeft()}
      <RenderCenter title={"Trang chủ"}/>
      {RenderRight()}
    </View>

    </ScrollView>

  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
});
