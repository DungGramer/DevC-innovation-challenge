import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import todo from "../config/data.json";
import TodoItem from "../components/TodoItem";

const data = todo.todo;

export const AllScreen = () => {
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

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<FlatList
					data={todoList}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => onToggleTodo(item.id)}
								onLongPress={() => onDeleteTodo(item.id)}
								style={[
									styles.todoItem,
									{
										backgroundColor:
											item.status === "Done" ? "green" : "tomato",
									},
								]}
							>
								<Text>{item.status}</Text>
								<Text>{item.body}</Text>
							</TouchableOpacity>
						);
					}}
				/>
				<TextInput
					style={styles.input}
					placeholder="Add..."
					clearButtonMode="always"
					autoCapitalize="sentences"
					onSubmitEditing={(val) =>
						setTodoList([
							...todoList,
							{ id: Date.now(), status: "Active", body: val.nativeEvent.text },
						])
					}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AllScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	todoItem: {
		backgroundColor: "#eee",
		borderBottomColor: "#fff",
		borderBottomWidth: 1,
	},
	input: {
		borderWidth: 1,
		height: 30,
		marginTop: 20,
	},
});
