import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants';

function Detail ({ route }) {
	const { title, status } = route.params;
	return (
		<SafeAreaView style={[styles.container, {backgroundColor: status === 'Done' ? '#47B5A0' : '#FB6D75'}]}>
			<Text style={styles.status}>{status}</Text>
			<Text style={styles.title}>{title}</Text>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	status: {
		textAlign: 'center',
		fontSize: 30,
		marginBottom: 20,
		color: "#f8f4f4"
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		color: "#f8f4f4"
	}
});
export default Detail;
