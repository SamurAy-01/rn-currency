import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {Component} from 'react';
import Header from './src/components/header';
import Converter from './src/components/converter';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header headerText='Currency Converter'/>
          <Converter/>
        </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    
  }
})



