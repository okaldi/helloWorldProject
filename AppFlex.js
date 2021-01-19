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
      <View style={styles.slideOne}>
        <Text>MERHABA</Text>
      </View>
      <View style={styles.slideTwo}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
    </View>
  );
};

/*
 justifyContent: Birincil eksende elemanların nasıl konumlanacağını belirler.
 _ flex-start
 _ flex-end
 _ center
 _ space-between
 _space-around

 alignItems : ikincil eksende elemanların nasıl konumlanacağını belirler
  _ flex-start
  _ flex-end
  _ stretch
*/

const styles = StyleSheet.create({
  container: {
    flex: 1, //içinde bulunduğun elemanı hem enine hem boyuna kapla
    backgroundColor: '#FFEB3B',
  },
  slideOne: {
    backgroundColor: '#607D8B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTwo: {
    flex: 2,
    backgroundColor: '#FF5772',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  box: {
    width: 100,
  },
  box1: {
    backgroundColor: '#795548',
  },
  box2: {
    backgroundColor: '#9E9E9E',
  },
  box3: {
    backgroundColor: '#3F51B5',
  },
});

export default App;
