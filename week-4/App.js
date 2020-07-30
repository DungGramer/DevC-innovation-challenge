import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import { ActiveScreen } from './screens/ActiveScreen.js';
import { AllScreen } from './screens/AllScreen.js';
import {CompleteScreen} from './screens/CompleteScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="CompleteScreen" component={CompleteScreen} options={{
					tabBarLabel: "Complete",
					tabBarIcon: ({color, size}) => (
						<MaterialIcons name="done" size={size} color={color} />
					)
				}} />
				<Tab.Screen name="AllScreen" default component={AllScreen} options={{
					tabBarLabel: "Todo",
					tabBarIcon: ({color, size}) => (
						<MaterialIcons name="view-list" size={size} color={color} />
					)
				}} />
				<Tab.Screen name="ActiveScreen" component={ActiveScreen} options={{
					tabBarLabel: "Active",
					tabBarIcon: ({color, size}) => (
						<MaterialIcons name="archive" size={size} color={color} />
					)
				}} />
			</Tab.Navigator>
		</NavigationContainer>
  );
}
