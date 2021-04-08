/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ThemeContext from '@src/context/theme-context';
import TabNavigation from '@src/components/routes/TabNavigation';
import DishDetails from '@src/components/screens/DishDetails';
import SearchDishes from '@src/components/screens/SearchDishes';
import AuthenticationStack from '@src/components/routes/Stacks/AuthenticationStack';
import { lightTheme, darkTheme } from '@src/styles/theme';
import AuthContext from '@src/context/auth-context';
import AsyncStorage from '@react-native-community/async-storage';
import Lazy_com from '@src/components/Lazy_com'
import Login from '../screens/Authentication';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const { theme } = useContext(ThemeContext);
  const { userToken } = useContext(AuthContext);
  const [authState, setauthState] = React.useState('2');

  React.useEffect(() => {
    const login = async () => {
      const state = await AsyncStorage.getItem('userToken');
      setauthState(state)
    };
    login()
  }, []);

  React.useEffect(() => {
    setauthState(userToken)
  }, [userToken]);

  const flex = 1;
  const rootContainerBackgroundColor =
    theme === 'light'
      ? lightTheme.colors.background
      : darkTheme.colors.background;
  const screenOptions =
    Platform.OS === 'ios'
      ? {
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }
      : {
        ...TransitionPresets.FadeFromBottomAndroid,
      };
  return (
    <NavigationContainer theme={theme === 'light' ? lightTheme : darkTheme}>
      <View style={{ flex, backgroundColor: rootContainerBackgroundColor }}>
        <StatusBar
          backgroundColor={
            theme === 'light'
              ? lightTheme.colors.background
              : darkTheme.colors.background
          }
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        />
        {/* <AuthContext.Provider value={}></AuthContext.Provider> */}
        <RootStack.Navigator mode="modal" screenOptions={screenOptions}>
          {authState == '1' ? (
            <RootStack.Screen
              name="Main"
              options={{ headerShown: false }}
              component={TabNavigation}
            />
          ) : authState == '2' ? (
            <RootStack.Screen
              options={{
                headerTransparent: true,
                headerStatusBarHeight: 0,
                title: '',
                headerBackTitleVisible: false,
              }}
              name="Lazy_com"
              component={Lazy_com}
            />
          ) : (
            <RootStack.Screen
              options={{
                headerTransparent: true,
                headerStatusBarHeight: 0,
                title: '',
                headerBackTitleVisible: false,
              }}
              name="Auth"
              component={AuthenticationStack}
            />
          )}

          <RootStack.Screen
            options={{
              headerTransparent: true,
              title: '',
              headerBackTitleVisible: false,
            }}
            name="DishDetailsModal"
            component={DishDetails}
          />
          <RootStack.Screen
            options={{
              headerShown: false,
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                  }),
                },
              }),
            }}
            name="SearchDishesModal"
            component={SearchDishes}
          />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default RootNavigation;
