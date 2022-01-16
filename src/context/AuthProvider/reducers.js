import AsyncStorage from '@react-native-async-storage/async-storage';
export default function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
      AsyncStorage.setItem('@USER', JSON.stringify(action.payload.user));
      return {...state, user: action.payload.user};
    case 'REMOVE_USER':
      AsyncStorage.removeItem('@USER');
      return {...state, user: null};

    default:
      return state;
  }
}
