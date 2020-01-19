import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
//import Header from '../components/header';
import { Button, Icon, Header } from 'react-native-elements';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView>
        <Header
          centerComponent={{ text: 'Place search', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginTop: 50, fontSize: 25 }}>Search!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});