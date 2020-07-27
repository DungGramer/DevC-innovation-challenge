import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export const ActiveScreen = () => {
	return(
		<View style={styles.container}>
			<Text>Active Screen</Text>
		</View>
	)
};

export default ActiveScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		justifyContent: 'center',
	}
})