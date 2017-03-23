
var license = "XTUMwQ0ZRQy9GZnYwbmVNK2RNOGRITDRLSzhvbnlRT1dsUUlVQ3hJc2FvTVpURlhpNXl2cGJuNmNRZkZWSmdRPQoKYXBwVG9rZW49YzkzZTM5NDQtZDEwNy00OTVkLThhYzctNzcwMzUxZDQ0YzJmCnBhY2thZ2VOYW1lPWNvbS5jYXJ0by5jdHJtYXB2aWV3Cm9ubGluZUxpY2Vuc2U9MQpwcm9kdWN0cz1zZGstYW5kcm9pZC00LioKd2F0ZXJtYXJrPWN1c3RvbQo=";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var CTRMapView = require('./CTRMapView');

export default class MyMapView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigationBar}>
          <Text style={styles.navigationBarText}> CARTO REACT-NATIVE WRAPPER </Text>
        </View>
        <CTRMapView style={styles.mapview} license={license} zoom={0.5} addBaseLayer={true}></CTRMapView>
        <View style={styles.button}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    height: "8%",
    width: "100%",
    backgroundColor: "#162945",
           justifyContent: 'center',
        alignItems: 'center',
  },
  navigationBarText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600"
  },
  mapview: {
    height: "92%",
    width: "100%"
  },
  button: {
    // FloatingActionButton
    backgroundColor: '#F24440',
    right: 15,
    bottom: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  },
});

AppRegistry.registerComponent('CTRMapView', () => MyMapView);










