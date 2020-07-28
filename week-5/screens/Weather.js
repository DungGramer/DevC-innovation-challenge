import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

export const Weather = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Weather</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight
	}
})

export default Weather;

