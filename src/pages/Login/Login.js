import React from 'react';
import {View, Image} from 'react-native';
import Input from '../../components/Input'; //components
import Button from '../../components/Button';
import styles from './Login.style'; //style

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../assets/pan.png')} />
      </View>
      <View style={styles.formContainer}>
        <Input />
        <Input />
        <Button text="SIGN IN" />
      </View>
    </View>
  );
};

export default Login;
