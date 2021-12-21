import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, margin: 12, height: 150},
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: '#00000099',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    textAlign: 'right',
    padding: 5,
  },
});

export default styles;
