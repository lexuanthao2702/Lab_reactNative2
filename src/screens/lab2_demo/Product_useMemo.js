import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

function Product_useMemo() {
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Products, setProducts] = useState([]);
  const handleSubmit = () => {
    setProducts([
      ...Products,
      {
        Name,
        Price: parseInt(Price),
      },
    ]);
  };
  const total = Products?.reduce((result, prod) => {
    console.log("tinh tong.... ");
    return result + prod.Price
  },0)
  console.log(Products)
  return (
    <View style={styles.container}>
      <TextInput
        value={Name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Input Name"></TextInput>
      <TextInput
        value={Price}
        onChangeText={setPrice}
        style={styles.input}
        placeholder="Input Price"></TextInput>
      <Button title="Add" onPress={handleSubmit}></Button>
      <Text>Total: {total}</Text>
      <View>
        {
            Products ?.map((prod, index) => {
              <Text key={index} >{prod.Name} - {prod.Price}</Text>
            })
        }
      </View>
    </View>
  );
}

export default Product_useMemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 320,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: 'blue',
  },
});
