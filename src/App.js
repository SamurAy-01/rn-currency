import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';

class App extends Component{
  render() {
    console.log('kaslfjlkdsfjlks');
    return (
      <View styles={styles.appContainer}>
        <Banner text='Authentication'/>
        <LoginForm/>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor:'#F3F3F3',
    flex: 1
  }
})


export default App;