var React = require('react-native');

var {
	StyleSheet,
	TextInput,
	Image,
	View,
	Component
} = React;
var styles = {};

class SimpleTextField extends Component {	
	constructor(props){
		super(props);
		var defaultStyles = {
			loginWrapper: {
				height: 30,
				width: 250,
				borderBottomWidth: 1,
				borderBottomColor: 'white',
				flexDirection: 'row'		
			},
			logoImage: {
				width: 20,
				height: 20,
				marginTop: 5
			},
			loginTextField: {
				color: 'white',
				paddingLeft: 10,
				flex: 1
			}
		};
		if (!props.secureEntry) {
			props.secureEntry = false;
		}	
		if (props.extendedStyles) {
			for(var extendedKey in props.extendedStyles){
				defaultStyles.loginWrapper[extendedKey] = props.extendedStyles[extendedKey];
			}
		}
		styles = StyleSheet.create(defaultStyles);
	}
	render(){
		return (
		<View style={styles.loginWrapper}>					
			<Image source={{uri:this.props.logoImage}} style={styles.logoImage} />
			<TextInput style={styles.loginTextField} placeholder={this.props.placeholderText} secureTextEntry={this.props.secureEntry} placeholderTextColor='white' onChangeText={this.props.onChangeText} />
		</View>
		);
	}
}

module.exports = SimpleTextField;