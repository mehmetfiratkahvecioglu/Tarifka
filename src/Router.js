import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';
import Login from './pages/Login';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log in" component={Login} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
