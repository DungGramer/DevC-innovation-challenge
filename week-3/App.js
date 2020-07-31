import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons } from '@expo/vector-icons';
import Home from "./app/screens/Home";
import Stats from "./app/screens/Stats";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Play"
					component={Home}
					options={{
						tabBarIcon: ({ size, color }) => (
							<Entypo name="controller-play" size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="Stats"
					component={Stats}
					options={{
						tabBarIcon: ({ size, color }) => (
							<Ionicons name="ios-stats" size={size} color={color} />

						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
