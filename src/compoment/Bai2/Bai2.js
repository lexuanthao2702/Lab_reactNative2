import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Car from '../car/Car';

const Bai2 = () => {
  return (
    <ScrollView style={{paddingHorizontal: 10}}>
      <Text style={styles.text}>Lịch Trình</Text>
      <View style={styles.container}>
        <Car
          text1={'Địa Điểm'}
          text2={'Hồ trầm vũng tàu'}
          text3={'Thời gian'}
          text4={'09:00 AM - 12:00, 12/12/2024'}
          text5={'Phương tiện di chuyển'}
          text6={'Xe bus'}
          text7={'Thời gian'}
          text8={'21:00 - 22:00'}
          text9={'Hình ảnh'}
        />
        <Image
          style={styles.img}
          source={require('../../acsset/image.png')}></Image>
      </View>
      <Text style={styles.text}>Khách Sạn</Text>

      <View style={styles.container}>
        <Car
          text1={'Tên Khách Sạn'}
          text2={'Hồng Quỳnh'}
          text3={'Giờ mở cửa'}
          text4={'06:00 AM - 12:00 AM'}
          text5={'Địa Điểm'}
          text6={'234 Quang Trung, HCM'}
        />
        <Pressable style={styles.Pressable}>
          <Text style={{color: 'white'}}>Chi Tiết</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccc',
    flexDirection: 'column',
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'blue',
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  Pressable: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
