import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Image,
	FlatList,
} from "react-native";
import Post from "./Post";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import info from './data.json';

function Newsfeed() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={{ flex: 1.5 }}></View>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require("../assets/logoInsta.png")}
					/>
				</View>
				<View style={styles.inbox}>
					<Feather name="inbox" size={25} color="black" />
				</View>
			</View>
			<View style={styles.body}>
				<FlatList
					data={info}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<Post
							avatar={item.avatar}
							name={item.name}
							image={item.image}
							countLike={item.countLike}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	header: {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	logoContainer: {
		flex: 7,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		position: "absolute",
		resizeMode: "contain",
		height: 120,
		width: null,
		aspectRatio: 1,
	},
	inbox: {
		flex: 1.5,
		alignSelf: "center",
		alignItems: "center",
	},
	body: {
		flex: 9,
	},
});
export default Newsfeed;
