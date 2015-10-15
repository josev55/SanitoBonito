var React = require('react-native');

var {
	Component,
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} = React;

var styles = {
	navigationBar: {
		flexDirection: 'row',
		height: 64		
	},
	leftItem: {
		flex: 0.2,
		marginTop:30,

	},
	titleItem: {
		flex: 0.6,
		marginTop: 30,
		alignItems: 'center'
	},
	rightItem: {
		flex: 0.2,
		marginTop: 30
	}

};	

class NavigationBarComponent extends Component {
	constructor(props){
		super(props);
		if (props.barColor) {
			styles.navigationBar['backgroundColor'] = props.barColor;
		}
		styles = StyleSheet.create(styles);
	}
	render() {
		return (
			<View style={styles.navigationBar}>
				<View style={styles.leftItem}>
					<Text style={{color: this.props.tintColor, paddingLeft: 10}} onPress={this.props.leftItemPress}>{this.props.leftTitle}</Text>
				</View>
				<View style={styles.titleItem}>
					<Text style={{color: this.props.tintColor, fontSize: 16, fontWeight: 'bold'}}>{this.props.pageTitle}</Text>	
				</View>
				<View style={styles.rightItem}>
					<Text style={{color: this.props.tintColor}} onPress={this.props.rightItemPress}>{this.props.rightItem}</Text> 					
				</View>								
			</View>
		);
	}
}

module.exports = NavigationBarComponent;
