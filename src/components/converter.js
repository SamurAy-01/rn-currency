import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import axios from 'axios';

const url = 'https://api.currencyapi.com/v3/latest?apikey=wYwrXRFZtcagEGSRK1OWxop4Nkm5FF5pZTq6XB1v'

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
    axios.get(url)
      .then(response => {
        const datas = response.data;
        this.setState({
          datas: datas,
          ytl: datas.data.TRY.value,
          usd: datas.data.USD.value,        
          cad: datas.data.CAD.value,        
          jpy: datas.data.JPY.value,        
          eur: datas.data.EUR.value       
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
          placeholder="Enter EUR Value"
          style={inputStyle}
          keyboardType="numeric"
          onChangeText={(text) => {
            const i = parseFloat(text);
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
