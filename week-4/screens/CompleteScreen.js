import React, {useState} from "react";

import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export const CompleteScreen = () => {
	return(
		<View style={styles.container}>
			<Text>Complete Screen</Text>
		</View>
	)
};

export default CompleteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		justifyContent: 'center',
	}
})