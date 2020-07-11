import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Platform,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import { Entypo, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import Headerbar from "../screens/Headerbar";
import Navbar from "./Navbar";
import colors from "../config/colors";

function Detail() {
	return (
		<SafeAreaView style={styles.container}>
			<Headerbar />
			<View style={styles.imageCover}>
				<Image style={styles.image} source={require("../assets/12.jpg")} />
			</View>
			<View style={styles.detail}>
				<View style={styles.headerCover}>
					<Text style={styles.heading}>Secret Beach</Text>
					<Text style={styles.location}>
						<Entypo name="location-pin" size={20} color={colors.primary} />
						Kalihiwai, Hawaii
					</Text>
					<View style={styles.download}>
						<TouchableOpacity>
							<Feather name="download-cloud" size={24} color="white" />
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles.description}>
					Secret Beach is located approximately one-half mile northwest of the
					town of Kilauea
				</Text>
				<View style={styles.hashtagCover}>
					<TouchableOpacity>
						<Text style={styles.hashtag}>#photography</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.hashtag}>#ocean</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<View style={styles.reaction}>
						<AntDesign
							style={{ marginRight: 10 }}
							name="heart"
							size={20}
							color={colors.primary}
						/>
						<Feather name="message-circle" size={20} color={colors.primary} />
					</View>
					<FontAwesome name="bookmark" size={20} color={colors.primary} />
				</View>
			</View>
			<Navbar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	imageCover: {
		flex: 1,
	},
	image: {
		position: "absolute",
		top: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
		aspectRatio: 1,
		resizeMode: "cover",
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	detail: {
		flex: 1,
		marginHorizontal: 20,
	},
	headerCover: {
		marginTop: 20,
		marginBottom: 20,
	},
	heading: {
		fontSize: 25,
		fontWeight: "bold",
		color: colors.text,
	},
	location: {
		color: colors.primary,
	},
	download: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		right: 0,
		top: 10,
		width: 45,
		height: 45,
		backgroundColor: colors.button,
	},
	description: {
		marginBottom: 15,
		color: colors.text,
	},
	hashtagCover: {
		flexDirection: "row",
	},
	hashtag: {
		backgroundColor: "#F5F7FB",
		color: colors.primary,
		marginRight: 12,
		borderRadius: 20,
		padding: 8,
		overflow: "hidden",
		marginBottom: 30,
	},
	reaction: {
		flexDirection: "row",
	},
});

export default Detail;

