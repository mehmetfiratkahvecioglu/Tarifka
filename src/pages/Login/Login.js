import React from 'react';
import {View, Image, Alert} from 'react-native';
import Input from '../../components/Input'; //components
import Button from '../../components/Button';
import styles from './Login.style'; //style
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
const Login = () => {
  const {data, loading, error, post} = usePost();
  const handlePress = x => {
    post(Config.AUTH_API_URL + '/login', x);
  };
  if (error) {
    Alert.alert('Tarifka', 'HATa');
  }
  console.log(data);
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
            <Button text="SIGN IN" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
