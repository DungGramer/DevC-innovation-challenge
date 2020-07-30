import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

function TodoItem({ status, onPress, onLongPress, body }) {
	return (
		<TouchableOpacity>
			<Text
				onPress={onPress}
				onLongPress={onLongPress}
				style={styles.todoItem}
			>
				<Text style={{ color: status === "Done" ? "green" : "tomato" }}>
					{body}
				</Text>
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	todoItem: {
		backgroundColor: "#fff",
		borderBottomColor: "#fff",
		borderBottomWidth: 1,
		borderRadius: 100,
		padding: 12,
		marginVertical: 6,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
});

export default TodoItem;
