import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bai2 from '../../compoment/Bai2/Bai2';
import Bai3 from '../../compoment/Bài3/Bai3';
import Header from '../../compoment/hedear/Header';

const Tab = createBottomTabNavigator();

const Lab1 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bai2" component={Bai2} options={{headerShown: false}}/>
        <Tab.Screen name="Bai3" component={Bai3} options={{headerShown: false}}/>
        <Tab.Screen name="Bai1" component={Header} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Lab1;

const styles = StyleSheet.create({});
