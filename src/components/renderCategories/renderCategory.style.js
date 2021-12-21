import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  img: {height: 50, width: 50, margin: 1, marginLeft: 4, borderRadius: 20},
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    textAlignVertical: 'center',
    marginLeft: 8,
  },
});

export default styles;
