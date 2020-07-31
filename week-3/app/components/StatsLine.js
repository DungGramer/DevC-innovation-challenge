import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function StatsLine({ title, data, style }) {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={[styles.title, style]}>{title}</Text>
			</View>
			<View style={{ flex: 1, alignItems: "flex-end" }}>
				<Text style={styles.data}>{data}</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#fff",
		paddingVertical: 20,
		paddingHorizontal: 20,
		marginBottom: 10,
		borderRadius: 100,

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
		fontWeight: "bold",
		fontSize: 16,
	},
	data: {
		fontSize: 15,
	}
	
});
