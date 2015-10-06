var React = require('react-native');
var SimpleTextField = require('./BasicComponents/SimpleTextField.component.js');


var {
	Component,
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	Text,
	Image
} = React;

class LoginScreenComponent extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<SimpleTextField logoImage='user' placeholderText='Usuario'  onChangeText={(login) => {console.log('Login: ' + login)}} />
				<SimpleTextField logoImage='lock' placeholderText='Contraseña' secureEntry={true}  onChangeText={(pass) => {console.log('Pass: ' + pass)}} extendedStyles={{marginTop: 20}}/>
				<TouchableHighlight style={styles.touchableLogin} onPress={() => {console.log('')}}>
					<View style={styles.buttonLogin}>
						<Text style={styles.loginText}>Ingresar</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.touchableFacebook} onPress={() => {}}>
					<View style={styles.buttonFacebook}>
						<Text style={{color: 'white'}}>Facebook</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight style={styles.touchableRegister} onPress={() => {}}>
					<View style={styles.buttonRegister}>
						<Text style={styles.loginText}>¿No tienes cuenta?</Text>
					</View>
				</TouchableHighlight>							
			</View>
			);
	}
}

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 40,
		paddingRight: 40,
		backgroundColor: '#48ADAD'
	},
	loginTextField: {
		height: 30,
		paddingLeft: 10,		
	},
	passTextField: {
		height: 30,
		paddingLeft: 10,
		marginTop: 10
	},
	touchableLogin: {
		height: 35,
		backgroundColor: '#003040',
		width: 220,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 2
	},
	touchableFacebook: {
		height: 35,
		backgroundColor: '#4D6791',
		width: 220,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	touchableRegister: {
		height: 35,
		backgroundColor: '#6EA136',
		width: 220,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loginText: {
		color: '#FFF'
	}
});

module.exports = LoginScreenComponent;