import axios from "axios";
import type { Article } from "../types";

export const fetchOpenAlexArticles = async (
	queryURL: string,
): Promise<Article> => {
	try {
		const response = await axios.get(queryURL);
		return response.data.results; // Assuming the results are inside a 'results' property
	} catch (error) {
		console.error("Error fetching OpenAlex articles:", error);
		throw new Error("Failed to fetch articles from OpenAlex.");
	}
};
