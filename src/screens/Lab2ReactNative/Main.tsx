import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export type userType = {
  name: string;
  avatar: string;
};
const colors = ['yellow', 'red', 'pink', 'green', 'blue', 'orange'];
function Main() {
  const [User, setUser] = useState<userType>({
    name: 'No name',
    avatar:
      'https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png',
  });
  const [lastTimeUpdate, setlastTimeUpdate] = useState('Ban chua update');
  const [footerColor, setfooterColor] = useState(colors[0]);

  // ham random color
  const handleRanromColor = useCallback(() => {
    const numberRandom = Math.floor(Math.random() * colors.length);
    setfooterColor(colors[numberRandom]);
  }, []);

  useEffect(() => {
    const currenDate = new Date();
    const dataTime =
      currenDate.getDate() +
      '/' +
      (currenDate.getMonth() + 1) +
      '/' +
      currenDate.getFullYear() +
      '  ' +
      currenDate.getHours() +
      ':' +
      currenDate.getMinutes() +
      ':' +
      currenDate.getSeconds();
    setlastTimeUpdate(dataTime);
    console.log(dataTime)
  }, [User]);

  //Update User
  const handleUpdateUser = useCallback((_user: userType) => {
    setUser(_user);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Hooks</Text>
      <Header user={User}></Header>
      <Body onUpdateUser={handleUpdateUser} onClickChangeFooter={handleRanromColor}></Body>
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}></Footer>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 80
  },
  title: {
    color: 'red',
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
