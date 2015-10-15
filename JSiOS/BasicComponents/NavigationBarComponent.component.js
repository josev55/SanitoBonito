'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var Actions = require('react-native-router-flux').Actions;

var {
	StyleSheet,
	Component,
	Text
} = React;

class NavBarBase extends Component {
	render() {
		return <NavigationBar style={this.props.navStyle}
                              titleColor='white'
                              buttonsColor='white'
                              statusBar='lightContent'
                              prevTitle={this.props.prevTitle}
                              onPrev={this.props.onPrev || Actions.pop}
                              onNext={this.props.onNext || Actions.pop}
            {...this.props} />
	}
}

class NavBarRegister extends Component {
	render() {		
		return <NavBarBase prevTitle="Cancelar" nextTitle=" " title="Registro" navStyle={{backgroundColor: '#007B7B'}} onNext={()=>{}} {...this.props}/>
	}
}

module.exports = {NavBarBase,NavBarRegister};