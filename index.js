
var license = "XTUN3Q0ZDWWdPKysrNHY2bDBJbndORDNHakZTMHNoTFRBaFFmZklNZ1l5b1hmcTBhQUtSeURHMWtSWVF1bWc9PQoKYXBwVG9rZW49NmI1ZGMxZTItMTFkMy00MjY1LTg2MjQtZTFhMWU4ZTY5ZWQ5CmJ1bmRsZUlkZW50aWZpZXI9Y29tLmNhcnRvLmN0cm1hcHZpZXcKb25saW5lTGljZW5zZT0xCnByb2R1Y3RzPXNkay1pb3MtNC4qCndhdGVybWFyaz1jdXN0b20K";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var NTMapView = require('./NTMapView');

export default class MyMapView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}></View>
        <View style={styles.navigationBar}>
          <Text style={styles.navigationBarText}> CARTO REACT-NATIVE WRAPPER </Text>
        </View>
        <NTMapView style={styles.mapview} license={license} zoom={0.5} addBaseLayer={true}></NTMapView>
        <View style={styles.button}></View>
      </View>
    );
  }
}

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
    fontSize: 15,
    fontWeight: "600"
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










