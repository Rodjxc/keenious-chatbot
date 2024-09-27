import axios from "axios";
import type { Article } from "../types";

export const fetchOpenAlexArticles = async (
	queryURL: string,
): Promise<Article[]> => {
	try {
		const response = await axios.get(queryURL);
		return response.data.results || [];
	} catch (error) {
		console.error("Error fetching OpenAlex articles:", error);
		return [];
	}
};
