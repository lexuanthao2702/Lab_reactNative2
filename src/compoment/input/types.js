import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const WrapInput = ({ label, error, description }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleInputChange = (text) => setHasError(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>title</Text>
      <View style={[styles.inputContainer, isFocused && styles.focused, hasError && styles.errorBorder]}>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleInputChange}
          placeholder='Place holder'
          style={styles.input}
        />
        {error && <Image source={require('../../acsset/img/eror.png')} style={styles.icon} />}
        {isFocused && !error && <Image source={require('../../acsset/img/eror.png')} style={styles.icon} />}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  focused: {
    borderColor: 'blue',
  },
  errorBorder: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    padding: 0,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  description: {
    marginTop: 5,
    fontStyle: 'italic',
    color: '#666',
  },
});

export default WrapInput;
