var React = require('react-native');
var TextInputState = require('TextInputState');
var NavigationBarComp = require('./BasicComponents/NavigationBar.component.js');
var {InlineTextInput} = require('./BasicComponents/SimpleTextField.component.js');
var CustomActionSheet = require('react-native-custom-action-sheet');

var {
	Component,
	View,
	TouchableWithoutFeedback,
	TouchableHighlight,
	Text,
	TextInput,
	StyleSheet,
	Image,
	DatePickerIOS,
	TouchableOpacity
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
	},
	fieldBox: {
		borderBottomWidth: 1,
		borderBottomColor: '#FFF' 
	},
	input: {
	    height: 35, 
	    paddingLeft: 5,
	    borderBottomWidth: 0.5,
	    paddingTop: 8,	    
	    borderBottomColor: '#666',
	    marginLeft: 30,
	    marginRight: 30,
	    flexDirection: 'row'
  	},
  	datePicker: {
	    borderTopWidth: 1, 
	    position: 'absolute', 
	    bottom: 0, 
	    right: 0, 
	    left: 0, 
	    height: 220, 
	    borderColor: '#CCC', 
	    backgroundColor: '#FFF',    
  	},
  	saveButton: {
  		height: 31,
  		marginLeft: 60,
  		marginRight: 60,
  		borderRadius: 5,
  		backgroundColor: '#007B7B',
  		justifyContent: 'center',
  		marginTop: 30
  	},
  	saveBtnText: {
  		color: '#FFF',
  		alignSelf: 'center'
  	},
  	innerDisclaimer: {
  		color: '#007B7B'
  	},
  	disclaimerText: {  		
  		fontSize: 12,
  		marginLeft: 60,
  		marginRight: 60,
  		marginTop: 10,
  		textAlign: 'justify'
  	},
  	datePickerContainer: {
  		backgroundColor: '#FFF',
  		marginBottom: 10,
  		borderRadius: 6,
  		alignItems: 'center'
  	}
});

class RegistroProfile extends Component {	
	constructor(props){
		super(props);	
		var defaultDate = new Date();
		defaultDate.setFullYear(defaultDate.getFullYear() - 18);	
		this.state = { date: new Date(defaultDate), modalVisible: false };
	}

	onDateChange( date ){
    	this.setState( { date: date } );
  	}

  	toggleModal() {
  		TextInputState.blurTextInput(TextInputState.currentlyFocusedField())
  		var visibleTmp = this.state.modalVisible;
  		this.setState({
  			modalVisible: visibleTmp ? false : true
  		});
  	}

	render() {
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

							<InlineTextInput fieldLabel="Nombre" labelColor="#999999" extendedStyles={{borderTopWidth: 0.5, borderTopColor: '#666', borderBottomWidth: 0.5, borderBottomColor: '#666', marginTop: 40, marginLeft: 30, marginRight: 30, paddingLeft: 5, paddingRight: 5}}/>
							
							<InlineTextInput fieldLabel="Sexo" labelColor="#999999" extendedStyles={{borderBottomWidth: 0.5, borderBottomColor: '#666', marginLeft: 30, marginRight: 30, paddingLeft: 5, paddingRight: 5}}/>							
							<TouchableWithoutFeedback onPress={ this.toggleModal.bind(this) }>
								<View style={ styles.input }>
									<View>
										<Text style={{color:"#999999"}}>Fecha de Nac.</Text>
									</View>
									<View style={{flex: 1, alignItems: 'flex-end', paddingRight: 5}}>
						          		<Text style={{color: '#999'}}>{ this.state.date.getDate() }/{ this.state.date.getMonth() + 1}/{ this.state.date.getFullYear() }</Text>
						          	</View>
						        </View>
						    </TouchableWithoutFeedback>
							<InlineTextInput fieldLabel="Email" labelColor="#999999" extendedStyles={{borderBottomWidth: 0.5, borderBottomColor: '#666', marginLeft: 30, marginRight: 30, paddingLeft: 5, paddingRight: 5}}/>
							<TouchableHighlight style={styles.saveButton}>
								<Text style={styles.saveBtnText}>Registrar</Text>
							</TouchableHighlight>
							<Text style={styles.disclaimerText}>Al registrarte estas aceptando los <Text style={styles.innerDisclaimer}>Términos </Text> y <Text style={styles.innerDisclaimer}>Condiciones</Text></Text>
						</View>
						<CustomActionSheet labelText={"Aceptar"} modalVisible={this.state.modalVisible} onCancel={this.toggleModal.bind(this)}>
				          <View style={styles.datePickerContainer}>
				            <DatePickerIOS mode={"date"} date={this.state.date} onDateChange={(selectedDate) => {this.setState({date: selectedDate})}} />
				          </View>
				        </CustomActionSheet>
					</View>
				</TouchableWithoutFeedback>
				
			</Image>			
		);
	}
}

module.exports = RegistroProfile;