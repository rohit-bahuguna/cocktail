import axios from 'axios';

const getAllCocktail = async () => {
	const url =
		'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
	const response = await axios.get(url);
	//console.log(response.data);
	return response.data;
};

const getCocktailDetails = async id => {
	console.log(id, ' form api');
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
	const response = await axios.get(url);
	//console.log(response.data);
	return response.data;
};

export { getAllCocktail, getCocktailDetails };
