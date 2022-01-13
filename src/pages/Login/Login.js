import React from 'react';
import {View, Image} from 'react-native';
import Input from '../../components/Input'; //components
import Button from '../../components/Button';
import styles from './Login.style'; //style
import {Formik} from 'formik';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../assets/pan.png')} />
      </View>
      <Formik
        initialValues={{userName: '', passWord: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.formContainer}>
            <Input
              onType={handleChange('userName')}
              value={values.userName}
              name={'user'}
            />
            <Input
              onType={handleChange('passWord')}
              value={values.passWord}
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
