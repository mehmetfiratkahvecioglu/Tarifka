import React from 'react';
import {View, Image, Alert, Text} from 'react-native';
import Input from '../../components/Input'; //components
import Button from '../../components/Button';
import styles from './Login.style'; //style
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();
  const handlePress = values => {
    post(Config.AUTH_API_URL + '/login', values);
  };
  if (error) {
    Alert.alert('Tarifka', 'HATA');
  }
  if (data) {
    dispatch({type: 'SET_USER', payload: {user}});
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../assets/pan.png')} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handlePress}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.formContainer}>
            <Input
              onType={handleChange('username')}
              value={values.username}
              name={'user'}
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              name={'key'}
              isSecure
            />
            <Button text="SIGN IN" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '50.3467',
      long: '-20.1310',
    },
    city: 'San Antonio',
    street: 'Hunters Creek Dr',
    number: 6454,
    zipcode: '98234-1734',
  },
  id: 4,
  email: 'don@gmail.com',
  username: 'donero',
  password: 'ewedon',
  name: {
    firstname: 'don',
    lastname: 'romer',
  },
  phone: '1-765-789-6734',
  __v: 0,
};
