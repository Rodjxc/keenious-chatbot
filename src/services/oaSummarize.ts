import axios from "axios";
import type { Article } from "../types";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const getSummarizedArticles = async (
	articles: Article[],
): Promise<{ intro: string; summaries: string[] }> => {
	try {
		const summaryPrompt = articles
			.map(
				(article, index) =>
					`Article ${index + 1}:\n` +
					`Title: ${article.title}\n` +
					`Year: ${article.publication_year}\n` +
					`Citations: ${article.cited_by_count}\n` +
					`Open Access: ${article.is_oa ? "Yes" : "No"}\n`,
			)
			.join("\n");

		const response = await axios.post(
			OPENAI_API_URL,
			{
				model: "gpt-4o-mini",
				messages: [
					{
						role: "system",
						content:
							"You are a chatbot assistant that generates a brief and conversational summary for research articles based on their title, year, citation count, and open access status.",
					},
					{
						role: "user",
						content: `Here is a list of articles that match what you asked:\n${summaryPrompt}\nProvide a brief conversational summary for the articles.`,
					},
				],
			},
			{
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);

		// Split the response into an introduction (chat gpt's response) and summaries
		const responseContent = response.data.choices[0].message.content.trim();
		const [intro, ...summaries] = responseContent.split("\n\n");

		return {
			intro,
			summaries,
		};
	} catch (error) {
		console.error("Error summarizing articles:", error);
		throw new Error("Failed to generate article summary.");
	}
};
