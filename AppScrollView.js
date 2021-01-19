import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class App extends Component {
  state = {
    name: '',
    sifre: '',
  };
  _onChangeText = (text) => {
    this.setState({
      name: text,
    });
  };

  _onChangeSifre = (text) => {
    this.setState({
      sifre: text,
    });
  };
  render() {
    const {name} = this.state;
    const {sifre} = this.state;
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <TextInput
          value={name}
          placeholder="Bir isim gir hasta etme adamı"
          onChangeText={this._onChangeText}
          keyboardType="email-address"
          style={styles.myInput}
        />

        <TextInput
          secureTextEntry={true}
          value={sifre}
          placeholder="Şifre"
          style={styles.myInput}
          onChangeText={this._onChangeSifre}
          keyboardType="number-pad"
        />
        <ScrollView pagingEnabled={true} horizontal={true}>
          <Text style={styles.title}>1</Text>
          <Text style={styles.title}>2</Text>
          <Text style={styles.title}>3</Text>
          <Text style={styles.title}>4</Text>
          <Text style={styles.title}>5</Text>
          <Text style={styles.title}>6</Text>
          <Text style={styles.title}>7</Text>
          <Text style={styles.title}>8</Text>
          <Text style={styles.title}>9</Text>
          <Text style={styles.title}>10</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  myInput: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: 'gray',
    marginVertical: 20,
  },
  title: {
    backgroundColor: 'orange',
    marginVertical: 30,
    paddingVertical: 60,
    textAlign: 'center',
    width,
    borderColor: 'yellow',
    borderWidth: 3,
    fontSize: 36,
  },
});
