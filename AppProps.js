/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import Card from './src/components/Card';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const instructions = Platform.select({
  ios: '\nPress CMD+R to reload, \nCMD+D or shake for dev menu ',
  android:
    ' \nDouble tap R on your keyboard to reload, \nShake or press menu button for dev menu',
});

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Card text="Selam Aleyke" backgroundColor="blue" />
      <Card text="Adam Ol!" />
      <Card text="Döverim seni!" backgroundColor="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //içinde bulunduğun elemanı hem enine hem boyuna kapla
    backgroundColor: '#FFEB3B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
