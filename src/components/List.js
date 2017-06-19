import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TouchableHighlight,
	ScrollView,
	Dimensions,
	StyleSheet,
} from 'react-native';
const {width, height } = Dimensions.get('window');

export default class List extends Component {
	render(){
		return(
			<View style={style.container}>
				<TextInput style = {style.input} placeholder="Username"/>
				<TextInput style = {style.input} placeholder="password"/>
				<TouchableHighlight 
					onPress={()=>this.props.navigation.navigate('Feed')}
					style={[style.buttonContainer]}>
					<Text>
						Login
					</Text>
				</TouchableHighlight>
			</View>
			)
	}
}

// const style = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: 'column',
// 		justifyContent: 'flex-start',
// 		alignItems: 'center'
// 	},
// 	input:{
// 		height:40,
// 		borderWidth: 1,
// 		borderColor: 'blue',
// 		width: width/2,
// 		marginTop: 7+'%',
// 		alignSelf: 'center',
// 	},
// 	buttonContainer:{
// 		backgroundColor: 'yellow',
// 		height: 40,
// 		width: width/2,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginTop: 5,
// 	}
// })