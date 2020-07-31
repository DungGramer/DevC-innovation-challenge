import colors from './color';

export const user = [
	{
		name: "Rock",
		uri: require("../assets/rock_2.png"),
	},
	{
		name: "Paper",
		uri: require("../assets/paper_2.png"),
	},
	{
		name: "Scissors",
		uri: require("../assets/scissors_2.png"),
	},
];

export const com = [
	{
		name: "Rock",
		uri: require("../assets/rock.png"),
	},
	{
		name: "Paper",
		uri: require("../assets/paper.png"),
	},
	{
		name: "Scissors",
		uri: require("../assets/scissors.png"),
	},
];

export const setColorBackground = (choice) => {
	let color;
	if (choice == 'Rock') color = '#A9D8EA'
	if (choice == 'Paper') color = colors.won
	if (choice == 'Scissors') color = colors.tied
	return color;
}