var React = require('react-native');
var moment = require('moment');

var {
	StyleSheet,
	TextInput,
	Image,
	View,
	Component,
	Text,
	DatePickerIOS
} = React;
var styles = {};

class SimpleTextField extends Component {	
	constructor(props){
		super(props);
		responder = this.refs["INPUT_REF"];
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
			<Image source={{uri: this.props.logoImage}} style={styles.logoImage} />
			<TextInput style={styles.loginTextField} placeholder={this.props.placeholderText} placeholderTextColor='white' onChangeText={this.props.onChangeText} />
		</View>
		);
	}
}

var inlineTextStyles = StyleSheet.create({
	main: {
		flexDirection: 'row',
		height: 35,
		alignItems: 'center'
	},
	leftText: {
		flex: 0.2,
		fontFamily: 'Titillium Web',
		fontSize: 16,
		paddingBottom: 2
	},
	leftDate: {
		flex: 0.6,
		fontFamily: 'Titillium Web',
		fontSize: 16,
		paddingBottom: 2	
	},
	rightInput: {
		flex: 0.6,
		textAlign: 'right'
	},
	rightDate: {
		flex: 0.4
	}
});

class InlineTextInput extends Component {
	render() {
		return (
			<View style={[inlineTextStyles.main,this.props.extendedStyles]}>
				<Text style={[inlineTextStyles.leftText, {color: this.props.labelColor}]}>{this.props.fieldLabel}</Text>
				<TextInput style={inlineTextStyles.rightInput} placeholder={this.props.placeholderText} />
			</View>
		);
	}
}

module.exports = {SimpleTextField, InlineTextInput};