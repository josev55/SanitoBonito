/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {Router, Route, Container, Actions, Animations, Schema} = require('react-native-router-flux');
var Login = require('./JSiOS/login.ios.js');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var SanitoBonito = React.createClass({
  render: function() {
    return (
      <Router>
        <Route name='launch' initial={true} hideNavBar={true} component={Login} />
      </Router>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SanitoBonito', () => SanitoBonito);
