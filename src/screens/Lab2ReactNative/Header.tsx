import {Image, StyleSheet, Text, View} from 'react-native';
import React, { FC, memo } from 'react';

type HeaderType = {
    user: any
}


const Header:FC<HeaderType>= memo(props => {
    const {user} = props
  console.log('re-render header');
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        resizeMode="center"
        source={{
          uri: user.avatar,
        }}></Image>
      <View>
        <Text>Xin chào ngày mới</Text>
        <Text style={styles.title}>{user.name}</Text>
      </View>
    </View>
  );
})

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  avatar: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
});
