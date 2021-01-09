/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';

import Main from './components/Main';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Main />
    </View>
  );
};

export default App;
