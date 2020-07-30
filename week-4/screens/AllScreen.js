import React, { useState } from "react";
import {
	StyleSheet,
	FlatList,
	ScrollView,
	SafeAreaView,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Constants from "expo-constants";
import todo from "../config/data.json";
import TodoItem from "../components/TodoItem";
import Detail from "./Detail";

const data = todo.todo;
const Stack = createStackNavigator();

export const AllScreen = ({ navigation }) => {
	const [todoList, setTodoList] = useState(data);

	const onToggleTodo = (id) => {
		const todo = todoList.find((todo) => todo.id === id);
		todo.status = todo.status === "Done" ? "Active" : "Done";
		const foundIndex = todoList.findIndex((todo) => todo.id === id);
		todoList[foundIndex] = todo;
		const newTodoList = [...todoList];
		setTodoList(newTodoList);
	};

	const onDeleteTodo = (id) => {
		const newTodoList = todoList.filter((todo) => todo.id !== id);
		setTodoList(newTodoList);
	};

	const screen = ({ navigation }) => {
		return (
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView enabled behavior="padding">
					
					<ScrollView>
						<FlatList
							data={todoList}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => (
								<TodoItem
									onPress={() => {
										onToggleTodo(item.id);
										navigation.navigate("Detail", {
											title: item.body,
											status: item.status,
										});
									}}
									onLongPress={() => onDeleteTodo(item.id)}
									style={styles.todoItem}
									status={item.status}
									body={item.body}
								/>
							)}
						/>
						<TextInput
							style={styles.input}
							placeholder="Add..."
							clearButtonMode="always"
							autoCapitalize="sentences"
							onSubmitEditing={(val) =>
								setTodoList([
									...todoList,
									{
										id: Date.now(),
										status: "Active",
										body: val.nativeEvent.text,
									},
								])
							}
						/>
					</ScrollView>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	};

	return (
		<Stack.Navigator>
			<Stack.Screen name="Todo List" component={screen} default options={{
				title: "Todo List",
				headerTitleAlign: 'center'
			}} />
			<Stack.Screen name="Detail" component={Detail} options={{
 				headerTransparent: true,
				headerTitleStyle: {
					color: "#f8f4f4"
				},
				headerTintColor: '#f8f4f4'
			}} />
		</Stack.Navigator>
	);
};

export default AllScreen;

const styles = StyleSheet.create({
	container: {
		width: "95%",
		flex: 1,
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "#f6f6f8",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
	},
	input: {
		borderWidth: 0.5,
		height: 30,
		marginTop: 20,
	},
});
