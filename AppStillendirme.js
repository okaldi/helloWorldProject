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
  android: ' \nDouble tap R on your keyboard to reload, \nShake or press menu button for dev menu',
});


const App: () => React$Node = () => {
  return (
   <View style={styles.container}>
     <Text style={styles.welcome}>Adam Olun Lan!</Text>
     <View style={[styles.box, styles.box1]}>
       <Text>Box1</Text>
       </View>  
       <View style={[styles.box2, styles.box]}>
       <Text>Box2</Text>
       </View>  

   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //içinde bulunduğun elemanı hem enine hem boyuna kapla
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEB3B',
    
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin: 10
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: '#ddd',
    marginBottom: 5
  },
  box1: {
    backgroundColor: 'aquamarine'  
  },
  box2: {
    backgroundColor: 'purple'
  }
});

export default App;
