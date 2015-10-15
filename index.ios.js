/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./JSiOS/login.ios.js');
var Registro = require('./JSiOS/registro.ios.js');
var NavigationBar = require('react-native-navbar');
var {NavBarRegister} = require('./JSiOS/BasicComponents/NavigationBarComponent.component.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var {
  Router, 
  Route,
  Animations
} = require('react-native-router-flux');

var LoginRoute = {
  component: Login  
};

var SanitoBonito = React.createClass({
  render: function() {
    return (      
      <Router>
        <Route name="launch" initial={true} hideNavBar={true} component={Login} sceneConfig={Animations.FlatFloatFromBottom}/>
        <Route name="registro" hideNavBar={false} component={Registro} navBar={NavBarRegister} sceneConfig={Animations.FlatFloatFromBottom}/>
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
