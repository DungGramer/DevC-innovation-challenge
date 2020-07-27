import React, {useState} from "react";

import { View, StyleSheet, Text } from "react-native";

function TodoItem({status, title}) {
	return (
		<TouchableOpacity>
			<Text>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});

export default TodoItem;
