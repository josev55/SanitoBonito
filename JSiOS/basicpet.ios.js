var React = require('react-native');

var {
	Component,
	Image,
	View,
	StyleSheet
} = React;

class BasicPet extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.header}>
				</View>
				<View style={styles.body}>
				</View>
				<View style={styles.petPicture}>
					<Image style={styles.petPictureFrame} source={}>
						<TouchableHighlight onPress={() => {console.log('Agregar aca el Camera Roll')}}>
							<Image style={styles.petPictureViewer} source={this.state.selectedPetPicture} />
						</TouchableHighlight>
					</Image>
				</View>
			</View>
		);
	}
}