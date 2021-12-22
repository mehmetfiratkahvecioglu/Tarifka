import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/loading.json')} autoPlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    marginBottom: 160,
  },
});

export default Loading;
