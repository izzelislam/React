import React, {Component} from 'react';
import{
	View,
	Text,
	Alert,
	Image,
	Button,
	Platform,
	StatusBar,
	StyleSheet
} from 'react-native';

class per2 extends Component{
	PressButton()
	{
		Alert.alert('uwu')
	}
	render(){
		return(
			<View style={{flex:1,backgroundColor:'#fff',paddingTop:StatusBar.currentHeight||0}}>
				<StatusBar barStyle="light-content"/>
				<View style={styles.header}>
					<Text style={styles.title}>
					  ini header
					</Text>
				</View>
				<View style={{flex:1}}>
					<View style={styles.content}>
						<Image 
							source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3B7IvhzvxVJzskyM6TgQf8CXzearelIB_fohKPs1sDTyuqm-u'}}
							style={{width:400,height:200,marginBottom:20,}}
						/>
						<Button 
							title="uhuy"
							onPress={this.PressButton}
						/>
					</View>
				</View>
				<View style={styles.footer}>
					<Text style={styles.footerText}>
					  ini footer
					</Text>
				</View>
			</View>
		)
	}
}

export default per2;
const styles=StyleSheet.create({
	header:{
		height:60,
		flexDirection:'row',
		paddingHorizontal:20,
		justifyContent: 'center',
		backgroundColor:'red',		
	},
	title:{
		color:'white',
		fontSize:30,
		fontWeight:'bold',
		alignSelf:'center',

	},
	footer:{
		backgroundColor:'black',
		height:50,
		alignItems:'center',
		bottom:0,
		justifyContent:'center',
		flexDirection:'row',
	},
	footerText:{
		color:'white',
	},
	content:{
		alignItems:'center',
		justifyContent:'center',
	}
});