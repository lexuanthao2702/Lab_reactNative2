import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {FC, memo, useState} from 'react';
import {userType} from './Main';
import metroConfig from '../../../metro.config';

type bodyType = {
  onUpdateUser: (user: userType) => void;
  onClickChangeFooter: () => void
};
const Body: FC<bodyType> = memo(props => {
  console.log('re-render Body');
  const {onUpdateUser,onClickChangeFooter} = props;
  const [name, setName] = useState('');
  const [LinkImage, setLinkImage] = useState('');
  const handleChangeInfor = () => {
    if (name.length > 0 && LinkImage.length > 0) {
      onUpdateUser({name, avatar: LinkImage});
    } else {
      ToastAndroid.show('không được để rổng', ToastAndroid.SHORT);
    }
  };
  return (
    <View>
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="Input Name"
        style={styles.input}></TextInput>
      <TextInput
        onChangeText={setLinkImage}
        value={LinkImage}
        placeholder="Input Link Image"
        style={styles.input}></TextInput>
      <Button title="Update Info" onPress={handleChangeInfor}></Button>
      <Button title="Change Color Footer" onPress={onClickChangeFooter}></Button>
    </View>
  );
});

export default Body;

const styles = StyleSheet.create({
  container: {},
  Button: {
    height: 40,
    width: 90,
    backgroundColor: 'yellow',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#FAA300',
  },
});



//  https://cdn2.iconfinder.com/data/icons/web-hosting-19/50/70-512.png