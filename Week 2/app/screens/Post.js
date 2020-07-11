import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";
import colors from "../config/colors";
function Post({ avatar, name, image, countLike }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<Image style={styles.avatar} source={{uri: avatar}} />
				<Text style={styles.name}>{name}</Text>
			</View>
			<View style={styles.body}>
				<Image style={styles.image} source={{uri: image}} />
			</View>
			<View style={styles.footer}>
				<View style={styles.action}>
					<FontAwesome5
						style={{ marginRight: 15 }}
						name="heart"
						size={24}
						color="black"
						onPress={() => alert("like")}
					/>
					<FontAwesome5
						style={{ marginRight: 15 }}
						name="comment-alt"
						size={24}
						color="black"
					/>
					<Feather name="share" size={24} color="black" />
				</View>
				<View style={styles.liked}>
					<FontAwesome
						style={{ marginRight: 15 }}
						name="heart"
						size={24}
						color="black"
					/>
					<Text style={{fontWeight: "500",}}>{countLike} likes</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingVertical: 15,
		paddingLeft: 10,
		flex: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	avatar: {
		width: 40,
		height: 40,
		alignSelf: "center",
		borderRadius: 35,
	},
	name: {
		marginLeft: 10,
		fontWeight: "bold",
	},
	body: {
		flex: 6,
	},
	image: {
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		aspectRatio: 1,
	},
	footer: {
		flex: 2,
	},
	action: {
		paddingVertical: 10,
		paddingLeft: 10,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: colors.background,
		borderBottomWidth: 1,
	},
	liked: {
		paddingVertical: 10,
		paddingLeft: 10,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: colors.background,
		borderBottomWidth: 1,
		
	},
});

export default Post;
