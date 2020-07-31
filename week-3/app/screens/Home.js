import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { user, com, setColorBackground } from "../config/data";

import ButtonChoice from "../components/ButtonChoice";
import colors from "../config/color";


export let statsData = {
	played: -1,
	won: 0,
	lose: 0,
	tied: 0,
};

const configResult = (result) => {
	let color;
	if (result == "Victory!") {
		color = colors.won;
		statsData.won++;
	}
	if (result == "Defeat!") {
		color = colors.lose;
		statsData.lose++;
	}
	if (result == "Tie game!") {
		color = colors.tied;
		statsData.tied++;
	}
	statsData.played++;
	return color;
};

function Home() {
	const [userChoice, setUserChoice] = useState("Rock");
	const [comChoice, setComChoice] = useState("Rock");

	const [gamePrompt, setGamePrompt] = useState("Choose your weapon!");

	const randomComputerChoice = () =>
		com[Math.floor(Math.random() * com.length)];

	const getRoundOutcome = (userChoice) => {
		const computerChoice = randomComputerChoice().name;
		let result;

		if (userChoice === "Rock") {
			result = computerChoice === "Scissors" ? "Victory!" : "Defeat!";
		}
		if (userChoice === "Paper") {
			result = computerChoice === "Rock" ? "Victory!" : "Defeat!";
		}
		if (userChoice === "Scissors") {
			result = computerChoice === "Paper" ? "Victory!" : "Defeat!";
		}

		if (userChoice === computerChoice) result = "Tie game!";

		return [result, computerChoice];
	};

	const onPress = (playerChoice) => {
		const [result, compChoice] = getRoundOutcome(playerChoice);
		const newComputerChoice = com.find(
			(choice) => choice.name == compChoice.toString()
		).name;
		setGamePrompt(result);
		setUserChoice(playerChoice);
		setComChoice(newComputerChoice);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={[styles.headerText, { color: configResult(gamePrompt) }]}>
					{gamePrompt}
				</Text>
			</View>
			<View style={styles.play}>
				<View
					style={[
						styles.playerView,
						{ backgroundColor: setColorBackground(comChoice) },
					]}
				>
					<Image
						style={styles.image}
						source={com.find((x) => x.name == comChoice.toString()).uri}
					/>
				</View>
				<View
					style={[
						styles.playerView,
						{ backgroundColor: setColorBackground(userChoice) },
					]}
				>
					<Image
						style={styles.image}
						source={user.find((x) => x.name == userChoice.toString()).uri}
					/>
				</View>
			</View>
			<View style={styles.choice}>
				{user.map((choice) => {
					return (
						<ButtonChoice
							key={choice.name}
							onPress={() => onPress(choice.name)}
						>
							{choice.name}
						</ButtonChoice>
					);
				})}
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
		flex: 0.2,
		justifyContent: "center",
		marginVertical: 10,
	},
	headerText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 25,
	},
	play: {
		flexDirection: "row",
		height: "50%",
	},
	playerView: {
		flex: 1,
		height: "100%",
		justifyContent: "center",
	},
	image: {
		width: "67%",
		resizeMode: "contain",
		alignSelf: "center",
	},
	choice: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Home;
