import axios from "axios";

//openAI endpoint according to their docs
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
							"You are a helpful assistant that generates OpenAlex API URLs based on user queries for research articles. The API URL should include filters like 'default.search' for keywords, 'publication_year' for year-based filters, 'cited_by_count' for citation filters, and 'is_oa' for open access status. Your response should only include the valid OpenAlex API URL.",
					},
					{ role: "user", content: userMessage },
				],
			},
			{
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);

		// Return the generated URL
		return response.data.choices[0].message.content.trim();
	} catch (error) {
		console.error("Error generating OpenAlex URL:", error);
		throw new Error("Failed to generate query URL.");
	}
};
