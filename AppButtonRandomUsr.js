import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
// import PlatformExample from './src/components/PlatformExample';

import axios from 'axios';

export default class App extends Component {
  state = {
    name: '',
    surname: '',
    loading: true,
  };

  componentDidMount() {
    this.getRandomUser();
  }

  getRandomUser = async () => {
    this.setState({
      loading: true,
    });

    const {
      data: {results},
    } = await axios.get('https://randomuser.me/api/');
    const {
      name: {first, last},
    } = results[0];

    this.setState({
      name: first,
      surname: last,
      loading: false,
    });
  };

  render() {
    const {name, surname, loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <Text style={styles.text}>
              {name} {surname}{' '}
            </Text>
          )}
          <Button
            style={styles.text}
            title={'Random User'}
            onPress={this.getRandomUser}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
