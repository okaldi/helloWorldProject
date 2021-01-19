import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.IOSHeader}>
        <Text>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IOSHeader: {
    backgroundColor: 'yellow',
    padding: 22,
  },
});
