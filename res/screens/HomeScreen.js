import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
//import Header from '../components/header';
import { Button, Icon, Header, Input  } from 'react-native-elements';
import { array } from 'prop-types';

const increment = 0;
const nthTerm_tem = "";

export default class HomeScreen extends React.Component {
  

  static navigationOptions = {
    header: null,
  };
  state = {
    ValueCal1: '',
    ValueCal2: '',
    ValueCal3: '',
    ValueCal4: '',
    nthTerm: '',
    listNumber: [],
  }

  hasSeriesRelation =(arr, relationFn) =>{
    if (arr.length < 3) return false;
    return arr.every(relationFn);
  }
  isArithmeticAtIndex =(elm, i, arr) =>{
    if (i < 2) return true;
    return arr[i] - arr[i-1] === arr[i-1] - arr[i-2];
  }
  isGeometricAtIndex =(elm, i, arr) =>{
    if (i < 2) return true;
    if (arr[i-1] == 0 || arr[i-2] == 0) return false;
    return arr[i] / arr[i-1] === arr[i-1] / arr[i-2];
  }
  isFibonacciAtIndex =(elm, i, arr) =>{
    if (i < 2) return true;
    return arr[i] === arr[i-1] + arr[i-2];
  }


  onCoinMoreDetailSelected =(text) =>{

    

    if((this.state.ValueCal1 != "" && this.state.ValueCal1 != undefined) &&
    (this.state.ValueCal2 != "" && this.state.ValueCal2 != undefined) &&
    (this.state.ValueCal3 != "" && this.state.ValueCal3 != undefined) &&
    (this.state.ValueCal4 != "" && this.state.ValueCal4 != undefined)){

      this.setState({ listNumber: [] });
      this.setState({ nthTerm: "" });
      this.increment = 0;
      this.nthTerm_tem = "";
      
      this.state.listNumber.push(this.state.ValueCal1*1);
      this.state.listNumber.push(this.state.ValueCal2*1);
      this.state.listNumber.push(this.state.ValueCal3*1);
      this.state.listNumber.push(this.state.ValueCal4*1);
      console.log(this.state.listNumber);
      
      const fin1 = this.hasSeriesRelation(this.state.listNumber, this.isArithmeticAtIndex);
      const fin2 = this.hasSeriesRelation(this.state.listNumber, this.isGeometricAtIndex);
      const fin3 = this.hasSeriesRelation(this.state.listNumber, this.isFibonacciAtIndex);
      if(fin1){
       this.increment = this.state.listNumber[1] - this.state.listNumber[0];
       for(var i = 0; i < 5; i++){
        this.nthTerm_tem = this.nthTerm_tem+( this.increment * i + this.state.listNumber[0] )+" ";
       }
      }else if(fin2){
      
      this.increment = this.state.listNumber[1] / this.state.listNumber[0];
        for(var i = 0; i < 5; i++){
          this.nthTerm_tem = this.nthTerm_tem+( this.state.listNumber[0] * (Math.pow(this.increment, i)) )+" ";
        }
      }else if(fin3){
        for(var i = 0; i < 5; i++){
          if(i < 2){
            this.nthTerm_tem = this.nthTerm_tem+( this.state.listNumber[i] )+" ";
          }else{
            this.nthTerm_tem = this.nthTerm_tem+( this.state.listNumber[i-2] + this.state.listNumber[i-1] )+" ";
          }
        }
      }

      this.setState({ nthTerm: this.nthTerm_tem });
      console.log(this.state.nthTerm);
      
     
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

      <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', marginTop: 50}}>
       <View style={{width: 50, height: 50}}>
         <Input name="ValueCal1"
            onChangeText={(text) => this.setState({ValueCal1:text})}
            placeholder='0'
          />
        </View>
        <View style={{width: 50, height: 50}}>
         <Input name="ValueCal2"
            onChangeText={(text) => this.setState({ValueCal2:text})}
            placeholder='0'
          />
        </View>
        <View style={{width: 50, height: 50}}>
         <Input name="ValueCal3"
            onChangeText={(text) => this.setState({ValueCal3:text})}
            placeholder='0'
          />
        </View>
        <View style={{width: 50, height: 50}}>
         <Input name="ValueCal4"
            onChangeText={(text) => this.setState({ValueCal4:text})}
            placeholder='0'
          />
        </View>
      </View>
        

      
        
        <View style={{alignItems: 'center' }}>
      
         <Text style={{fontSize:25, marginTop: 70, color: '#999999'}}>{this.state.nthTerm}</Text>
       
          <TouchableOpacity
            style={styles.button}
            onPress={this.onCoinMoreDetailSelected.bind(this,1)}>
            <Text style={{ color: "#ffffff" }}>Calculate</Text>
          </TouchableOpacity>
        </View>

        <View>
         <Text style={{fontSize:15, marginTop: 10, marginLeft: 8}}>
           *หมายเหตุ  {"\n"}
            สามารถใช้ชุดตัวเลขคำนวณโดยใช้สูตร {"\n"}
            - Arithmetic Sequences  {"\n"}
            - Geometric Sequence  {"\n"}
            - Fibonacci Numbers Sequence  {"\n"}
            ตัวอย่างชุดตัวเลข {"\n"}
            (2,5,8,11) {"\n"}
            (3,9,27,81) {"\n"}
            (1,1,2,3)  {"\n\n"} 
            ยังไม่สามารถใช้สูตรได้ {"\n"}
            - Square Number Sequence {"\n"}
            - Incremental Sequence {"\n"}
           </Text>
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
    marginTop:20,
  },
});