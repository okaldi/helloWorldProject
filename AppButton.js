import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  state = {
    name: 'Onursal',
    number: 0,
  };

  onPressChangeName = () => {
    this.setState({
      name: 'Kamil',
    });
  };

  onPressIncrease = () => {
    this.setState({
      number: ++this.state.number,
    });
  };

  onPressDecrease = () => {
    this.setState({
      number: --this.state.number,
    });
  };

  _onPressButton = () => {
    alert('Tebrikler :D');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/platform.png')} />
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <TouchableOpacity style={{marginBottom: 10}}>
          <View>
            <Text style={styles.buttonTitle}>MY BUTTON</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            source={require('./src/assets/button.png')}
            style={{width: 100, height: 100}}
          />
        </TouchableOpacity>

        <Button
          title="Change the Name"
          color="#000"
          onPress={this.onPressChangeName}
        />
        <Text style={styles.number}>{this.state.number}</Text>
        <View style={styles.buttons}>
          <Button title="Azalt" color="#000" onPress={this.onPressDecrease} />
          <Button title="Artır" color="#000" onPress={this.onPressIncrease} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  number: {
    fontSize: 44,
  },
  name: {
    fontSize: 44,
  },
  buttonTitle: {
    fontSize: 24,
    borderWidth: 2,
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 15,
  },
});
