import axios from "axios";

// OpenAI endpoint according to their docs
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const getChatGPTQueryURL = async (
	userMessage: string,
): Promise<string> => {
	try {
		const response = await axios.post(
			OPENAI_API_URL,
			{
				model: "gpt-4o-mini",
				messages: [
					{
						role: "system",
						content:
							"You are a chatbot that generates OpenAlex API URLs based on user queries for research articles. Follow these rules to ensure the correct format: " +
							"In order to construct the OpenAlex compatible query, you have to use fitlers like: publication_year, cited_by_count, is_oa and default.seach" +
							"The `default.search` filter must directly match the keywords provided by the user (e.g., `default.search:climate change`). " +
							"- Use a comma ',' to separate different filters, not the pipe '|'. " +
							"- For a range of publication years, use two filters: 'publication_year:>start_year' and 'publication_year:<end_year+1'. For example, 'publication_year:>2022,publication_year:<2025' to get results for 2023 and 2024. " +
							"- Do not use '|' between different filter types like 'default.search' and 'publication_year'. " +
							"Generate the OpenAlex query URL in the format: 'https://api.openalex.org/works?filter=<FILTERS>'. Return only the valid OpenAlex URL without any additional text or comments.",
					},
					{
						role: "user",
						content: `Generate a suitable OpenAlex query URL for this message: "${userMessage}"`,
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

		return response.data.choices[0].message.content.trim();
	} catch (error) {
		console.error("Error generating OpenAlex URL:", error);
		throw new Error("Failed to generate query URL.");
	}
};
