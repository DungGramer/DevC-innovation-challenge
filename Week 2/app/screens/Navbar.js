import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from '../config/colors';

function Navbar() {
	return (
		<View style={styles.navbar}>
			<TouchableOpacity><Feather name="menu" size={24} color={colors.primary} /></TouchableOpacity>
			<TouchableOpacity><Ionicons name="ios-add-circle-outline" size={24} color={colors.primary} /></TouchableOpacity>
			<TouchableOpacity><Feather name="user" size={24} color={colors.primary} /></TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		paddingVertical: 5,
		bottom: 0,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default Navbar;
