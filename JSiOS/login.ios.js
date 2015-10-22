var React = require('react-native');
var {SimpleTextField} = require('./BasicComponents/SimpleTextField.component.js');
var FBButton = require('./BasicComponents/FBButton.component.js');
var TextInputState = require('TextInputState');
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;
var Registro = require('./registro.ios.js');
var Actions = require('react-native-router-flux').Actions;
var ScreenManager = require('NativeModules').ScreenManager;

var {
	Component,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	Text,
	View,
	Image,
	StatusBarIOS,
	TouchableWithoutFeedback,
	Navigator
} = React;

var firstResponder = null;

class LoginScreenComponent extends Component {
	constructor(props){
		super(props);
		StatusBarIOS.setStyle('light-content', false);
		ScreenManager.getDimensions((width, height) => {
			this.setState({
				screenWidth: width,
				screenHeight: height
			});
		});
	}
	_registerRoute() {
		Actions.registro
	}
	render() {
		return (			
				<View style={styles.bgContainer}>
					<Image style={styles.bgImage} source={{uri: 'login-bg'}}>
						<TouchableWithoutFeedback onPress={() => {
							TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
						}}>	
							<View style={styles.mainContainer}>
								<View style={styles.logoContainer}>
									<Image source={{uri: 'logo-white'}} style={styles.logo} />
									<Text style={styles.logoText}>Sanito Juguetón</Text>							
								</View>			
								<View style={styles.inputContainer}>
									<SimpleTextField logoImage='user' ref={"user"} placeholderText='Usuario' onChangeText={(login) => {console.log('Login: ' + login)}} />
									<SimpleTextField logoImage='lock' ref={"pass"} placeholderText='Contraseña'  onChangeText={(pass) => {console.log('Pass: ' + pass)}} extendedStyles={{marginTop: 20}}/>
								</View>
								<View style={styles.buttonsContainer}>
									<TouchableHighlight style={styles.touchableLogin} onPress={() => {console.log('')}}>
										<View style={styles.buttonLogin}>
											<Text style={styles.loginText}>Ingresar</Text>
										</View>
									</TouchableHighlight>													
									<TouchableHighlight style={styles.touchableFacebook} onPress={() => {}}>
										<FBButton />										
									</TouchableHighlight>										
								</View>
								<View style={styles.registerContainer}>									
									<Text onPress={() => {Actions.registro({data: this.state.screenWidth})}} style={styles.loginText}>¿No tienes cuenta? Regístrate aquí</Text>																	
								</View>				
							</View>
						</TouchableWithoutFeedback>
					</Image>
				</View>
			);
	}
}

var styles = StyleSheet.create({
	bgContainer: {
		flex: 1,
		alignItems: 'stretch'		

	},
	bgImage: {
		flex: 1
	},
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 40,
		paddingRight: 40
	},
	logoContainer: {
		flex: .40,
		justifyContent: 'center',
		alignItems: 'center'		
	},
	logo: {
		height: 103.8,
		width: 170
	},
	logoText: {
		fontFamily: 'Love Ya Like A Sister',
		fontSize: 32,
		color: 'white'
	},
	inputContainer: {
		flex: .25,
		alignItems: 'center'
	},
	buttonsContainer: {
		flex: .10
	},
	registerContainer: {
		flex: .2,		
		justifyContent: 'flex-end',
		marginBottom: 10
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
		width: 220,
		marginTop: 20,
		borderRadius: 2
	},
	touchableRegister: {				
		width: 250,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loginText: {
		color: '#FFF'
	},
	buttonsWrapper: {
		marginTop: 50,		
		marginBottom: 40
	}
});

module.exports = LoginScreenComponent;