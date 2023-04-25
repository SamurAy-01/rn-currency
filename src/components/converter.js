import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from 'axios';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ytl: '',
      usd: '',
      cad: '',
      jpy: '',
      eur: '',
      input: '',
      datas: {}
    }
    this.getRates = this.getRates.bind(this);
  }

  getRates() {
    console.log("getratesin içi");
    axios.get('https://api.currencyapi.com/v3/latest?apikey=nO1h6nKMid9JyP6VzFGIS8TOdxaQxnj4bvKTczOJ')
      .then(response => {
        console.log(response);
        const datas = response.data.data;
        this.setState({
          datas: datas,
          ytl: datas.TRY.value,
          usd: datas.USD.value,        
          cad: datas.CAD.value,        
          jpy: datas.JPY.value,        
          eur: datas.EUR.value       
        })
      })
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getRates();
  }

  render() {
    const { converterWrapper, inputStyle, textStyle} = styles;
    const { input, ytl, usd, cad, jpy, eur, datas } = this.state;

    return(
      <View style={converterWrapper}>
        <TextInput 
          placeholder="Enter USD Value"
          style={inputStyle}
          keyboardType="numeric"
          onChangeText={(text) => {
            const i = parseFloat(text) || 0;
            this.setState({
              input: text,
              ytl: (i * ytl ).toFixed(3),
              usd: (i * usd ).toFixed(3),
              cad: (i * cad ).toFixed(3),
              jpy: (i * jpy ).toFixed(3),
              eur: (i * eur ).toFixed(3),
            })
          }}
          value={`${input}`} />

        <Text style={textStyle}>TRY : {ytl} </Text>
        <Text style={textStyle}>USD : {usd} </Text>
        <Text style={textStyle}>CAD : {cad} </Text>
        <Text style={textStyle}>JPY : {jpy} </Text>
        <Text style={textStyle}>EUR : {eur} </Text>
        
        <TouchableOpacity onPress={() => this.getRates()}><Text>Hesapla</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  converterWrapper: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyle: {
    paddingBottom: 25
  },
  textStyle: {
    fontSize: 20,
    width: 200,
    height: 60
  }
});

export default Converter;