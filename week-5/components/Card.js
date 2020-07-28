import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Image } from "react-native";

const onPress = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  });
};

export default function Card({ title, image, date, url }) {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onPress(url)}>
			<Image style={styles.image} source={image || null} />
			<View style={styles.contentContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title} numberOfLines={4}>
						{title || null}
					</Text>
				</View>
				<View style={styles.date}>
					<Text>{date || null}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
		elevation: 5,

		width: "100%",
		height: 120,
		flexDirection: "row",
		borderRadius: 20,
		overflow: "hidden",
		marginVertical: 6,
		backgroundColor: "#fff"
	},
	image: {
		height: "100%",
		aspectRatio: 1,
		borderRadius: 20,
	},
	contentContainer: {
		margin: 6,
		marginLeft: 12,
		flexWrap: "wrap",
		flexShrink: 1,
		justifyContent: "space-between"
	},
	title: {
		fontWeight: "700",
		fontSize: 14,
	},
	date: {

	},
});
