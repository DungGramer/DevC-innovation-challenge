import React, { Children } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

function ButtonCovert({ from, to }) {
	var url = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=e41422a078ac3f2d3bf7&fbclid=IwAR0vZp5jPPFOL24TrynAXDUbSpR1QfVXZQTP4Oq0PqQ4p8SNSiDvbHhqMpk`
	return(
		<TouchableOpacity style={styles.button}>
			<Text>{from} to {to}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		height: 35,
		width: 200,
		margin: 10,
		borderWidth: 2,
		borderRadius: 20,
		alignItems: "center",
		borderColor: "lightblue",
		justifyContent: "center"
	}
})
export default ButtonCovert;
