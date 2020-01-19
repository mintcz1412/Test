import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader} from 'react-native-indicator';


export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ }, function() {
          this.setState({
            alignsecond: true,
          });
          setTimeout(() => {
            this.props.navigation.navigate('homeStack');
          }, 1000);
        }),
      2000
    ); 
  }
 
  render() {
    return (
     
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: this.state.align,
          marginHorizontal: 40,
        }}>
        <Image
          source={{
            uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
          }}
          style={{ width: 100, height: 100 }}
        />
          <View style={{ margin: 10 }}>
              <Text
                style={{ color: '#114998', fontSize: 20, fontWeight: 'bold' }}>
                Technical test of SCG Zero to One
              </Text>
          </View>
          <View>
              <DotsLoader />
              {/* <TextLoader text="Loading" /> */}
          </View>
      </View>
    );
  }
}