import React , {Component} from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet
} from 'react-native';

class Tugas extends Component
{
	render()
	{
		return(
			<View style={{flex:1}}>
				{/*header*/}
				<View style={styles.header}>
				</View>
				{/*content*/}
				<View style={styles.content}>
					<ScrollView>
						<View style={{height:100,width:350,marginTop:5,flexDirection:'row'}}>
								<ScrollView horizontal={true}>
									<View style={{backgroundColor:'#000',height:100, width:100,marginRight:5}}>
									</View>
									<View style={{backgroundColor:'#000',height:100, width:100,marginRight:5}}>
									</View>
									<View style={{backgroundColor:'#000',height:100, width:100,marginRight:5}}>
									</View>
									<View style={{backgroundColor:'#000',height:100, width:100,marginRight:5}}>
									</View>
									<View style={{backgroundColor:'#000',height:100, width:100,marginRight:5}}>
									</View>
								</ScrollView>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>
						<View style={{height:100,backgroundColor:'black',width:350,marginTop:5}}>
						</View>

					</ScrollView>
				</View>
				{/*footer*/}
				<View style={styles.footer}>
				</View>
			</View>
		)
	}
}
export default Tugas;
const styles=StyleSheet.create({
	header:{
		flex:2,
		backgroundColor:'tomato'
	},
	content:{
		flex:10,
		backgroundColor:'#fff',
		alignItems:'center'
	},
	footer:{
		flex:1,
		backgroundColor:'tomato'
	},

})