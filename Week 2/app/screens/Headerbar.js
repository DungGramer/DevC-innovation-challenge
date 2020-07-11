import React from "react";
import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import colors from "../config/colors";
function Headerbar() {
	return (
		<View style={styles.header}>
			<TouchableOpacity>
				<Ionicons
					style={styles.icon}
					name="md-arrow-back"
					size={24}
					color={colors.primary}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Foundation
					style={styles.icon}
					name="braille"
					size={24}
					color={colors.primary}
				/>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		position: "absolute",
		zIndex: 999,
		width: "100%",
		alignSelf: "center",
		top: 20,
		justifyContent: "space-between",
		paddingHorizontal: "5%",
		paddingVertical: "1%",
	},
});
export default Headerbar;
