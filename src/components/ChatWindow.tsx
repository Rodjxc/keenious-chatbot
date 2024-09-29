import { useState } from "react";

import { Paper, TextField, List, ListItem, Typography } from "@mui/material";
import { getChatGPTQueryURL } from "./../services/chatgpt";
import { fetchOpenAlexArticles } from "../services/openalex";
import type { Article, ChatWindowProps } from "../types";
import { getSummarizedArticles } from "../services/oaSummarize";
import { ChatbotButton } from "./buttons/ChatbotButton";

export const ChatWindow: React.FC<ChatWindowProps> = ({
	messages,
	setMessages,
	setArticles,
}) => {
	const [userInput, setUserInput] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSendMessage = async () => {
		if (userInput.trim() === "") return;

		setMessages([...messages, `You: ${userInput}`]);
		setUserInput("");
		setLoading(true);

		// Send the query to ChatGPT
		const queryURL = await getChatGPTQueryURL(userInput);

		if (!queryURL) return setLoading(false);

		// Fetch articles from OpenAlex
		const articles: Article[] = await fetchOpenAlexArticles(queryURL);

		// If no articles found then...
		if (!articles || articles.length === 0) {
			setMessages((prevMessages) => [
				...prevMessages,
				"Keenie: Sorry, I couldn't find anything. Try being more specific and use filters like publication years or amount of citations",
			]);
			setLoading(false);
			return;
		}

		// Fetch summarized articles (including intro and summaries)
		const { intro, summaries } = await getSummarizedArticles(articles);

		// Display the intro message in the chat
		setMessages((prevMessages) => [...prevMessages, `Keenie: ${intro}`]);

		// Combine each article with its corresponding summary
		const articlesWithSummaries = articles.map((article, index) => ({
			...article,
			summary: summaries[index] || "Summary not available.", // Pair each article with its summary by index
		}));

		// Update the articles state with summarized content to pass it to LandingPage
		setArticles(articlesWithSummaries);

		setLoading(false);
	};

	return (
		<Paper
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				padding: "22px",
				position: "fixed",
				bottom: "80px",
				right: "40px",
				width: "300px",
				height: "400px",
				overflowY: "auto",
			}}
		>
			<List
				sx={{
					flexGrow: 1,
					overflowY: "auto",
					marginBottom: "16px",
					"&::-webkit-scrollbar": {
						width: "8px",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "purple",
						borderRadius: "5px",
					},
					"&::-webkit-scrollbar-thumb:hover": {
						backgroundColor: "gray",
					},
				}}
			>
				{messages.map((msg, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <not too dangerous as I won't do anything with the index>
					<ListItem key={index}>
						<Typography variant="body2">{msg}</Typography>
					</ListItem>
				))}
			</List>
			<TextField
				fullWidth
				variant="standard"
				placeholder="i.e: Show me artificial intelligence articles published after 2011"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
				disabled={loading}
				multiline
				minRows={2}
				maxRows={3}
			/>

			<ChatbotButton onClick={handleSendMessage} loading={loading} />
		</Paper>
	);
};
