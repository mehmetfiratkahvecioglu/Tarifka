import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {resizeMode: 'cover', width: '100%', height: 150},
  titleContainer: {
    padding: 5,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {color: 'darkred', fontWeight: 'bold', fontSize: 20},
  bodyContainer: {padding: 5},
  bodyText: {color: 'black', fontWeight: 'bold'},
  button: {margin: 10},
});

export default styles;
