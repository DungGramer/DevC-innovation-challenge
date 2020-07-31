import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { setColorBackground } from "../config/data";

function ButtonChoice({children, onPress}) {
	return(
		<TouchableOpacity style={[styles.container, { backgroundColor: setColorBackground(children)}]} onPress={onPress}>
		<Text style={styles.title}>{children}</Text>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	container: {
		width: 200,
    margin: 10,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: '#640D14',
		
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	title: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	}
})

export default ButtonChoice;