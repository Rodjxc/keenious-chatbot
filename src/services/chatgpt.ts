import axios from "axios";

//openAI endpoint according to their docs
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const getChatGPTResponse = async (
	userMessage: string,
): Promise<string> => {
	try {
		const response = await axios.post(
			OPENAI_API_URL,
			{
				model: "gpt-4o-mini",
				messages: [
					{ role: "system", content: "You are a helpful assistant." },
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

		return response.data.choices[0].message.content.trim();
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
		throw new Error("Something went wrong, please try again later");
	}
};
