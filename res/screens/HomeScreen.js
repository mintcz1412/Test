import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
//import Header from '../components/header';
import { Button, Icon, Header, Input  } from 'react-native-elements';


export default class HomeScreen extends React.Component {
 
  static navigationOptions = {
    header: null,
  };
  state = {
    ValueCal: ''
  }

  nextHole(array,until) {
    this.array=array;
    this.lastIndex=0;
    this.lastItem=0;
    this.until=until;
    this.loopFinished=false;
    this.done=false;
    this.reset = function(){
        this.lastIndex=0;
        this.lastItem=0;
        this.done=false;
        this.loopFinished=false;
    }

    this.getNext = function(){

      if (this.done){
          return null;
      }

      if (!this.loopFinished){                
          for(loop=this.lastIndex;loop<this.array.length ;loop++){
              if (this.array[loop]!=this.lastItem+1){

                  this.lastItem++;
                  this.lastIndex=loop;
                  if (this.lastItem>until)
                      break;


                  return this.lastItem;
              }else{
                  this.lastItem=this.array[loop];
              }

          }

      }
      this.loopFinished=true;
      if (this.lastItem < this.until){
          return (++this.lastItem);
      }
      this.done=true;
      return null;
    }

  }

  

  onCoinMoreDetailSelected =(text) =>{
    if(this.state.ValueCal != "" && this.state.ValueCal != undefined){

    }else{
      alert("error please fill all fields!");
    }
      
  }
  
  render() {
    return (
      <SafeAreaView >
        <Header
          centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
        />
        <View>
         <Input name="ValueCal"
            onChangeText={(text) => this.setState({ValueCal:text})}
            placeholder='value'
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity
            style={styles.button}
            onPress={this.onCoinMoreDetailSelected.bind(this,1)}>
            <Text style={{ color: "#ffffff" }}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#18778a',
    padding: 15,
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop:100,
  },
});