var React = require('react-native');

var {
	Text,
	View,
	Image,
	Component,
	StyleSheet
} = React;

class FBButton extends Component {
	setNativeProps(props){
		this.refs["CONTAINER_VIEW"].setNativeProps(props);
	}
	render(){
		return (
			<View ref={"CONTAINER_VIEW"} style={styles.fbContainer}>
				<Image source={{uri: 'fblogo'}} style={styles.fblogo} />
				<Text style={styles.fbtext}>Ingresa con Facebook</Text>
			</View>
		);
	}
}

var styles = {
	fbContainer: {
		height: 35,
		width: 220,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#3B5880',
		borderRadius: 2
	},
	fblogo: {
		width: 20,
		height: 20,
		marginLeft: 10		
	},
	fbtext: {
		color: 'white',
		paddingLeft: 10,
		flex: 1,
		marginLeft: 10,
		fontFamily: 'Helvetica',
		fontWeight: 'bold'
	}
};

module.exports = FBButton;