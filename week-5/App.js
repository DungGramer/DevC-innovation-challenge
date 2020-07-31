import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import News from "./screens/News.js";
import Weather from "./screens/Weather.js";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="News" component={News} default options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="news" size={24} color={color} />
					)
				}} />
				<Tab.Screen name="Weather" component={Weather} options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="weather-windy-variant" size={24} color={color} />
					)
				}} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
