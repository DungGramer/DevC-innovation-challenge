import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	StyleSheet,
	Text,
	ActivityIndicator,
	FlatList,
	Linking,
} from "react-native";
import Constants from "expo-constants";
import moment from "moment";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";

import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";
// const url =
// 	"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss";

const renderArticleItem = ({ item }) => {
	return (
		<Card title={item.title} image={{ uri: item.urlToImage }}>
			<View style={styles.row}>
				<Text style={styles.label}>Source</Text>
				<Text style={styles.info}>{item.source.name}</Text>
			</View>
			<Text style={{ marginBottom: 10 }}>{item.content}</Text>
			<View style={styles.row}>
				<Text style={styles.label}>Published</Text>
				<Text style={styles.info}>
					{moment(item.publishedAt).format("LLL")}
				</Text>
			</View>
			<Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
		</Card>
	);
};

export const News = () => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [lastPageReached, setLastPageReached] = useState(false);

	const filterForUniqueArticles = (arr) => {
		const cleaned = [];
		arr.forEach((itm) => {
			let unique = true;
			cleaned.forEach((itm2) => {
				const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
				if (isEqual) unique = false;
			});
			if (unique) cleaned.push(itm);
		});
		return cleaned;
	};

	const getNews = async () => {
		try {
			const response = await fetch(
				`https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&page=${pageNumber}`
			);
			const jsonData = await response.json();
			const hasMoreArticles = jsonData.articles.length > 0;
			if (hasMoreArticles) {
				const newArticleList = filterForUniqueArticles(
					articles.concat(jsonData.articles)
				);
				setArticles(newArticleList);
				setPageNumber(pageNumber + 1);
			} else {
				setLastPageReached(true);
			}
		} catch (err) {
			alert(err);
		}
		setLoading(false);
		if (lastPageReached) return;
	};



	useEffect(() => {
		getNews();
	}, [articles]);

	return (
		<SafeAreaView style={styles.container}>
			{loading ? (
				<ActivityIndicator size="large" loading={loading} />
			) : (
				<>
					<View style={styles.row}>
						<Text style={styles.label}>Articles Count:</Text>
						<Text style={styles.info}>{articles.length}</Text>
					</View>
					<FlatList
						style={styles.list}
						data={articles}
						keyExtractor={(item) => item.title}
						renderItem={({ item }) => {
							// console.log(item);
							return (
								<Card
									title={item.title}
									image={{ uri: item.urlToImage }}
									date={moment(item.publishedAt).format("LLL")}
									url={item.url}
								/>
							);
						}}
						onEndReachedThreshold={1}
						onEndReached={getNews}
						ListFooterComponent={
							lastPageReached ? (
								<Text style={{textAlign: "center"}}>No more articles</Text>
							) : (
								<ActivityIndicator size="large" loading={loading} />
							)
						}
					/>
				</>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f1f1fe"
	},
	list: {
		flex: 1,
		width: "95%",
	},
	row: {
		flexDirection: "row",
	},
	label: {
		fontSize: 16,
		color: "black",
		marginRight: 10,
		fontWeight: "bold",
	},
	info: {
		fontSize: 16,
		color: "grey",
	},
});

export default News;
