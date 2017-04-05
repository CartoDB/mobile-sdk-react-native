
// cf. https://github.com/airbnb/react-native-maps

import React, { Component } from 'react'
import { requireNativeComponent, PropTypes, NativeModules } from 'react-native'

class InternalMapView extends React.Component {
	render() {
    	return <NTMapView {...this.props} />;
	}
}

InternalMapView.propTypes = {
	license: React.PropTypes.string,
	alpha: React.PropTypes.number,
	zoom: React.PropTypes.number,
	addBaseLayer: React.PropTypes.bool
	// ,
	// accessiilityLabel: Rect.PropTypes.string
}

var NTMapView = requireNativeComponent('CTRMapView', InternalMapView);

module.exports = InternalMapView;