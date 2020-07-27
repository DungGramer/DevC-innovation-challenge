import React, {useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ActiveScreen } from './screens/ActiveScreen.js';
import { AllScreen } from './screens/AllScreen.js';
import {CompleteScreen} from './screens/CompleteScreen.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="CompleteScreen" component={CompleteScreen} />
				<Tab.Screen name="AllScreen" component={AllScreen} />
				<Tab.Screen name="ActiveScreen" component={ActiveScreen} />
			</Tab.Navigator>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
