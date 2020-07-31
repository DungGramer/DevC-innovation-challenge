import React, { useState, useEffect } from "react";
import {
	TouchableOpacity,
	ImageBackground,
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "../utils";

const Loading = () => (
	<View style={styles.loading}>
		<ActivityIndicator />
	</View>
);

const WeatherCard = ({ location, error, loading }) => {
	const temperatureC = (location.main.temp - 273.15).toFixed(2);
	const temperatureF = (((location.main.temp - 273.15) * 9) / 5 + 32).toFixed(
		2
	);
	const description = location.weather[0].description;
	const windSpeed = location.wind.speed;
	const icon = location.weather[0].main;

	const capitalizedDescription =
		description && description.charAt(0).toUpperCase() + description.slice(1);

	if (error) {
		return (
			<View style={styles.container}>
				<Text>Error fetching weather!</Text>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			<View style={styles.weatherContainer}>
				{loading && <Loading />}
				<View style={styles.row}>
					<MaterialIcons name="location-city" size={25} color="lightgrey" />
					<Text style={styles.locationText}>{location.name}</Text>
				</View>
				<View style={[styles.row, { marginTop: 10 }]}>
					<MaterialCommunityIcons
						size={25}
						color="lightgrey"
						name="speedometer"
					/>
					<Text style={styles.text}>{windSpeed}</Text>
				</View>
				<View style={styles.row}>
					<MaterialCommunityIcons
						size={25}
						color="lightgrey"
						name={getWeatherIcon(icon)}
					/>
					<Text style={styles.text}>{capitalizedDescription}</Text>
				</View>

				<View style={styles.tempRow}>
					<View style={styles.row}>
						<MaterialCommunityIcons
							size={25}
							color="lightgrey"
							name="temperature-fahrenheit"
						/>
						<Text style={styles.text}>{temperatureF}</Text>
					</View>
					<View style={styles.row}>
						<MaterialCommunityIcons
							size={25}
							color="lightgrey"
							name="temperature-celsius"
						/>
						<Text style={styles.text}>{temperatureC}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const CitySelectionButtons = (props) => (
	<View style={styles.cityContainer}>
		<TouchableOpacity
			key="currentLocation"
			style={styles.currentLocation}
			onPress={() => props.onChooseCity("")}
		>
			<Text style={styles.cityName}>Current Location</Text>
		</TouchableOpacity>
		{CITIES.map((city) => {
			return (
				<TouchableOpacity
					key={city.name}
					style={styles.cityButton}
					onPress={() => props.onChooseCity(city.name)}
				>
					<Text style={styles.cityName}>{city.name}</Text>
				</TouchableOpacity>
			);
		})}
	</View>
);

export const Weather = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [location, setLocation] = useState({
		name: "",
		main: { temp: "" },
		wind: { speed: "" },
		weather: [{ main: "", description: "" }],
	});

	getLocationAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== "granted") {
			return;
		}

		const location = await Location.getCurrentPositionAsync();
		getWeather(location.coords.latitude, location.coords.longitude);
	};

	getWeather = async (latitude, longitude, imgUrl = "") => {
		setLoading(true);
		const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
		const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

		try {
			const response = await fetch(api);
			const jsonData = await response.json();
			setLocation({ ...jsonData, imgUrl });
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		getLocationAsync();
	}, []);

	const onChooseCity = (name) => {
		let randImg = "";
		if (name !== "") {
			const city = CITIES.find((city) => city.name === name);
			randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)];
			getWeather(city.latitude, city.longitude, randImg);
		} else {
			getLocationAsync();
		}
	};

	const bgImage = {
		uri: location.imgUrl || getWeatherBackgroundImage(location.weather[0].main),
	};

	return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <WeatherCard location={location} error={error} loading={loading} />
      <CitySelectionButtons onChooseCity={onChooseCity} />
    </ImageBackground>
	);
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  weatherContainer: {
    padding: 20,
    width: "90%",
    maxWidth: "90%",
    minHeight: "20%",
    marginTop: "20%",
    borderRadius: 25,
    marginBottom: "2%",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold"
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
		justifyContent: "center",
		
  },
  cityContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
		justifyContent: "space-around",
    marginTop: "20%",
  },
  cityName: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cityButton: {
    margin: 6,
    height: 40,
    padding: 3,
    width: "25%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  tempRow: {
    alignSelf: "center",
		flexDirection: "row",
  },
  locationText: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  currentLocation: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "72.5%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
		backgroundColor: "rgba(20,33,61,0.6)",
		marginBottom: 30,
  }
});

export default Weather;
