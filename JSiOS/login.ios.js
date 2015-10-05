var React = require('react-native');


var {
	Component,
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	Text
} = React;

class LoginScreenComponent extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<TextInput style={styles.loginTextField} placeholder='Usuario' onChangeText={(login) => {this.setState({loginText: login})}} />
				<TextInput style={styles.passTextField} placeholder='Contraseña' secureTextEntry={true} onChangeText={(pass) => {this.setState({passText: pass})}} />
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
		backgroundColor: '#6DA79D'
	},
	loginTextField: {
		height: 30,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingLeft: 10,
		backgroundColor: '#FFF'
	},
	passTextField: {
		height: 30,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingLeft: 10,
		marginTop: 10,
		backgroundColor: '#FFF'
	},
	touchableLogin: {
		height: 35,
		backgroundColor: '#9ED98E',
		width: 220,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
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
	}
});

module.exports = LoginScreenComponent;