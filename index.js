
var license = "";

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
        <View style={styles.statusBar}></View>
        <View style={styles.navigationBar}>
          <Text style={styles.navigationBarText}> CARTO REACT NATIVE SAMPLE </Text>
        </View>
        <CTRMapView style={styles.mapview}></CTRMapView>
        <View style={styles.button}></View>
      </View>
    );
  }
}

// CTRMapView.registerLicense(license);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: "3.3%"
  },
  navigationBar: {
    height: "7.3%",
    width: "100%",
    backgroundColor: "#162945",
           justifyContent: 'center',
        alignItems: 'center',
  },
  navigationBarText: {
    color: "white",
    fontSize: 16
  },
  mapview: {
    height: "89.4%",
    width: "100%"
  },
  button: {
    // FloatingActionButton
    backgroundColor: '#F24440',
    right: 10,
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
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










