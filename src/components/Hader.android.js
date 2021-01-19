import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.androidHeader}>
        <Text>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    backgroundColor: 'red',
    padding: 10,
  },
});
