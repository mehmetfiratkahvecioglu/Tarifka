import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//pages
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';
import Login from './pages/Login';
const Stack = createNativeStackNavigator();

function Router() {
  const userSession = useSelector(s => s.user);
  const authLoading = useSelector(s => s.authLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {authLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Log in"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerStyle: {backgroundColor: 'white'},
              headerTitleStyle: {color: 'black', fontWeight: 'bold'},
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={'black'}
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={{headerTitleStyle: {fontWeight: 'bold'}}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerTitleStyle: {fontWeight: 'bold'}}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
