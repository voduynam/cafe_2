// App.js
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/Screens/SignInScreen';
import SignOutScreen from './src/Screens/SignOutScreen';
import StoreHomeScreen from './src/Screens/StoreHomeScreen';
import OderDetailsScreen from './src/Screens/OderDetailsScreen';
import Store from './src/app/Store';
import ITCCempakaMasPage from './src/Screens/ITCCempakaMasPage';
import MallOfIndonesiaPage from './src/Screens/MallOfIndonesiaPage';
import MallArthaGadingPage from './src/Screens/MallArthaGadingPage';
import CartScreen from './src/Screens/CartScreen';
import PaymentScreen from './src/Screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const MyHomeStack = () => (
  <Stack.Navigator initialRouteName="STOREHOMESCREEN" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SIGNIN" component={SignInScreen} />
    <Stack.Screen name="HOMESCREEN" component={StoreHomeScreen} />
    <Stack.Screen name="STOREHOMESCREEN" component={StoreHomeScreen} />
    <Stack.Screen name="CARTSCREEN" component={CartScreen} />
    <Stack.Screen name="PRODUCTS_DETAIL" component={OderDetailsScreen} />
    <Stack.Screen name="SIGNOUT" component={SignOutScreen} />
    <Stack.Screen name="MallOfIndonesia" component={MallOfIndonesiaPage} />
    <Stack.Screen name="MallArthaGading" component={MallArthaGadingPage} />
    <Stack.Screen name="ITCCempakaMas" component={ITCCempakaMasPage} />
    <Stack.Screen name="CHECKTOTALPRODUCTDETAIL" component={PaymentScreen} />
  </Stack.Navigator>
);

const App = () => {


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyHomeStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
