import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FF8F00', padding: 10},
  imageContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  formContainer: {flex: 1},
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.2,
    resizeMode: 'contain',
    tintColor: 'white',
  },
});

export default styles;
