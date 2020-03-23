import React, {Component} from 'react';
import 
{
	View,
	Text,
	StyleSheet

} from 'react-native';

class App extends Component {
	render (){
		return (
			<View style={styles.container}>
				<View style={{
					flex: 1,
					backgroundColor:'yellow',
				}}>

				</View>

				<View style={{
					flex:2 ,
					backgroundColor:'green',
				}}>

				</View>
				<View style={{
					flex:3 ,
					backgroundColor:'red',
					flexDirection:'row',
					justifyContent:'space-between',
					padding:15,
				}}>
					<View style={styles.kotak}></View>
					<View style={styles.kotak}></View>
					<View style={styles.kotak}></View>
				</View>
				
			</View>
		)
	}
} 

export default App;

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'black',
	},
	kotak:{
		width:100,
		height:100,
		backgroundColor:'black',
	}
});