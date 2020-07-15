import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import ButtonCovert from "../components/ButtonCovert";

function Home() {
	const [convertedCurrencyValue, setFromCurrencyValue] = useState(0);
	return (
		<SafeAreaView style={styles.container}>
			<Text>Please enter the value of the currency you want to convert</Text>
			<TextInput
				style={styles.TextInput}
				keyboardType="number-pad"
				autoFocus
				selectionColor="red"
				placeholder="100,000,000 VND"
				onChangeText={setFromCurrencyValue}
			/>
			<ButtonCovert from="VND" to="USD" onPress={(url) => console.log(url)}/>
			<ButtonCovert from="USD" to="VND" />
			<Text>Current currency:</Text>
			<Text>{convertedCurrencyValue}</Text>
			<Text>Conversion currency:</Text>
			<Text>{convertedCurrencyValue * 2}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "90%",
		alignItems: "center",
		alignSelf: "center",
		marginTop: 50,
	},
	TextInput: {
		marginTop: 20,
		height: 50,
		width: "100%",
		padding: 2,
		fontSize: 20,
		borderWidth: 1,
		backgroundColor: "lightblue",
		textAlign: "center",
	},
});

export default Home;
