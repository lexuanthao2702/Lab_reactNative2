import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

export default function CountDown() {
  const [Count, setCount] = useState(30);
  const [Couter, setCouter] = useState(1);

  //============
  let timeID = useRef();
  console.log(timeID);
  const handleStart = () => {
    timeID.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    console.log('handleStart => ' + timeID);
  };
  const handleStop = () => {
    clearInterval(timeID.current);
    console.log('handleStop => ' + timeID);
  };
  useEffect(() =>{
    console.log("useEffect nay chay moi lan compoment re-render");

  }),
  useEffect(() =>{
    console.log("useEffect nay chay 1 lan khi compoment re-render");

  },[])
  useEffect(() =>{
    console.log("useEffect nay chay moi lan khi state count thay doi gia tri");
  },[Count])
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{Count}</Text>

      <Button title="Start" onPress={handleStart} color="red"></Button>
      <Button title="Stop" onPress={handleStop} color="blue"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
});
