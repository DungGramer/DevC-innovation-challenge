import React from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	RefreshControl,
	ScrollView,
} from "react-native";
import Constants from "expo-constants";
import ProgressCircle from "react-native-progress-circle";

import { statsData } from "./Home";
import StatsLine from "../components/StatsLine";
import colors from '../config/color.js';

const wait = (timeout) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
};

const winningPercent = (won, tied, played) => {
	won = Number(won);
	tied = Number(tied);
	played = Number(played);
	return Math.round(((won + 0.5 * tied) / played) * 1000) / 10;
};

const colorPercent = (percent) => {
	let color;
	if (percent >= 0 && percent <= 20) color = colors.lose;
	if (percent >= 20 && percent <= 50) color = colors.tied;
	if (percent >= 50 && percent <= 70) color = "#3399FF";
	if (percent >= 70 && percent <= 100) color = colors.won;
	return color;
}

function Stats() {
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		wait(2000).then(() => setRefreshing(false));
	}, []);
	const percent = winningPercent(
		statsData.won,
		statsData.tied,
		statsData.played
	);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View style={styles.percentContainer}>
					<ProgressCircle
						percent={percent}
						radius={50}
						borderWidth={8}
						color={colorPercent(percent)}
						shadowColor="#999"
						bgColor="#fff"
					>
						<Text style={{ fontSize: 18 }}>{!percent ? 0 : percent} %</Text>
					</ProgressCircle>
					<Text style={styles.percentHeader}>Winning Percentage</Text>
				</View>
				<View style={styles.section}>
					<StatsLine title="Played" data={statsData.played} style={{color: "#3399FF"}} />
					<StatsLine title="Won" data={statsData.won} style={{color: colors.won}} />
					<StatsLine title="Lose" data={statsData.lose} style={{color: colors.lose}} />
					<StatsLine title="Tied" data={statsData.tied} style={{color: colors.tied}} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		width: "95%",
		alignSelf: "center",
		backgroundColor: "#F2F3F8",
	},
	header: {
		textAlign: "center",
		fontSize: 20,
	},
	percentContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	percentHeader: {
		marginVertical: 40,
		fontSize: 20,
		fontWeight: "bold"
	},
	section: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
});

export default Stats;
