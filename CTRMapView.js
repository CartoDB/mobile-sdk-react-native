
// cf. https://github.com/airbnb/react-native-maps

import React, { Component } from 'react'
import { requireNativeComponent, PropTypes, NativeModules } from 'react-native'

class InternalMapView extends React.Component {
	render() {
    	return <CTRMapView {...this.props} />;
	}
}

InternalMapView.propTypes = {
	license: React.PropTypes.string,
	alpha: React.PropTypes.number
}

var CTRMapView = requireNativeComponent('CTRMapView', InternalMapView);

module.exports = InternalMapView;