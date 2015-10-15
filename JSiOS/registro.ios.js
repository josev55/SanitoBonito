var React = require('react-native');
var TextInputState = require('TextInputState');
var NavigationBarComp = require('./BasicComponents/NavigationBar.component.js');

var {
	Component,
	View,
	TouchableWithoutFeedback,
	TouchableHighlight,
	Text,
	TextInput,
	StyleSheet,
	Image
} = React;

var styles = StyleSheet.create({
	bgimage: {
		flex: 1
	},
	navigationBar: {
		height: 64,
		backgroundColor: '#007B7B',		
		flexDirection: 'row'
	},
	mainContainer: {		
		flex: 1
	},
	formView: {
		height: 450,
		backgroundColor: '#FFF',
		opacity: 1,
		borderRadius: 10,
		marginTop: 35,
		marginLeft: 35,
		marginRight: 35,
		shadowColor: '#404040',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	registerMessage: {
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 20		
	}, message: {
		fontFamily: 'Titillium Web',
		color: '#000',
		fontSize: 16
	},
	profilePicture: {
		borderRadius: 100,
		borderWidth: 8,
		borderColor: '#EFEFEF',
		width: 81,
		height: 81,
		alignSelf: 'center',
		marginTop: 20,
		backgroundColor: '#D9D9D9',
		alignItems: 'center',
		justifyContent: 'center'
	},
	profPictBtn:{
		width: 81,
		height: 81,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 120
	},
	cameraImage: {
		width: 27,
		height: 27
	}
});

class RegistroProfile extends Component {
	render() {
		console.log(styles);
		return (					
			<Image source={{uri: 'registrobg'}} style={styles.bgimage}>								
				<TouchableWithoutFeedback onPress={() => { TextInputState.blurTextInput(TextInputState.currentlyFocusedField()) }}>
					<View style={styles.mainContainer}>
						<View style={styles.formView}>
							<View style={styles.registerMessage}>
								<Text style={styles.message}>Solo tomará un momento...</Text>
							</View>
							<View style={styles.profilePicture}>
								<TouchableHighlight style={styles.profPictBtn} underlayColor={"#CCCCCC"} onPress={() => {}}>
									<Image source={{uri: 'cameraIcon'}} style={styles.cameraImage} />
								</TouchableHighlight>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Image>			
		);
	}
}

module.exports = RegistroProfile;