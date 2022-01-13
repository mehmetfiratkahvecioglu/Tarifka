import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/FontAwesome';
const Input = ({onType, value, name, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={name} size={25} color={'#ac1900'} />
    </View>
  );
};

export default Input;
