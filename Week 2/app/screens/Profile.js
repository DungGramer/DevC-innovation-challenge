import React from "react";
import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	Image,
	StatusBar,
	Platform,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Detail from "./Detail";
import Navbar from "./Navbar";
import colors from "../config/colors";
import HeaderWhite from "./HeaderWhite";
const imgData = [
	{ id: 1, imgSource: require("../assets/4.jpg") },
	{ id: 2, imgSource: require("../assets/11.jpg") },
	{ id: 3, imgSource: require("../assets/2.jpg") },
	{ id: 4, imgSource: require("../assets/3.jpg") },
	{ id: 5, imgSource: require("../assets/5.jpg") },
	{ id: 6, imgSource: require("../assets/6.jpg") },
	{ id: 7, imgSource: require("../assets/7.jpg") },
	{ id: 8, imgSource: require("../assets/8.jpg") },
	{ id: 9, imgSource: require("../assets/9.jpg") },
	{ id: 10, imgSource: require("../assets/10.jpg") },
];
function Profile(props) {
	return (
		<SafeAreaView style={styles.header}>
			<HeaderWhite />
			<ScrollView>
				<View style={styles.info}>
					<View style={styles.avatarContainer}>
						<Image
							style={styles.avatar}
							source={require("../assets/avatar.jpg")}
						/>
					</View>
					<View style={styles.name}>
						<Text style={styles.nickname}>Dung Gramer</Text>
						<Text style={styles.nameType}>Front-end Dev</Text>

						<View style={styles.button}>
							<TouchableOpacity
								style={styles.followButton}
								onPress={() => alert("Followed")}
							>
								<Text style={styles.textButton}>Follow</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.sendButton}
								onPress={() => alert("Message sended")}
							>
								<Ionicons name="md-send" size={17} color="white" />
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={styles.countFollow}>
					<View style={styles.follow}>
						<Text style={styles.numFollow}>210</Text>
						<Text style={styles.titleFollow}>Photos</Text>
					</View>
					<View style={styles.follow}>
						<Text style={styles.numFollow}>15k</Text>
						<Text style={styles.titleFollow}>Followers</Text>
					</View>
					<View style={styles.follow}>
						<Text style={styles.numFollow}>605</Text>
						<Text style={styles.titleFollow}>Following</Text>
					</View>
				</View>
				<View style={styles.showImage}>
					{imgData.map((item) => {
						return (
							<Image
								resizeMode={"cover"}
								style={styles.avatarImg}
								source={item.imgSource}
								key={item.id}
								
							/>
						);
					})}
				</View>
			</ScrollView>
			<Navbar />
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	header: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	info: {
		flex: 2,
		flexDirection: "row",
		width: "90%",
		alignSelf: "center",
		marginTop: 35,
	},
	avatarContainer: {
		flex: 35,
		alignSelf: "center",
		alignItems: "center",
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 1000,
	},
	name: {
		flex: 65,
		alignSelf: "center",
		marginLeft: 20,
	},
	nameType: {
		color: colors.gray,
	},
	nickname: {
		fontWeight: "900",
		fontSize: 20,
	},
	button: {
		marginTop: 10,
		flexDirection: "row",
	},
	followButton: {
		backgroundColor: colors.button,
		width: 80,
		height: 25,
		borderRadius: 13,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	textButton: {
		color: "white",
	},
	sendButton: {
		backgroundColor: colors.send,
		width: 50,
		height: 25,
		borderRadius: 13,
		marginLeft: 8,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	countFollow: {
		flexDirection: "row",
		flex: 1,
		width: "90%",
		alignSelf: "center",
	},
	follow: {
		flex: 1,
		alignItems: "center",
		alignSelf: "center",
		marginTop: 20,
		marginBottom: 15,
	},
	numFollow: {
		color: colors.text,
		fontWeight: "700",
		fontSize: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	titleFollow: {
		color: colors.gray,
	},
	showImage: {
		flex: 6,
		width: "90%",
		alignSelf: "center",
		justifyContent: "space-around",
		flexDirection: "row",
		flexWrap: "wrap",
	},

	avatarImg: {
		width: "45%",
		aspectRatio: 0.9,
		resizeMode: "cover",
		marginTop: 15,
		borderRadius: 15,
		overflow: "hidden",
	},
});

export default Profile;
