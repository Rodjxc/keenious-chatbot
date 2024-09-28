import { useState } from "react";

import {
	Paper,
	TextField,
	Button,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import { getChatGPTQueryURL } from "./../services/chatgpt";
import { fetchOpenAlexArticles } from "../services/openalex";
import type { Article, ChatWindowProps } from "../types";

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

		const queryURL = await getChatGPTQueryURL(userInput);

		if (!queryURL) return setLoading(false);

		const articles: Article[] = await fetchOpenAlexArticles(queryURL);

		if (!articles || articles.length === 0) {
			setMessages((prevMessages) => [
				...prevMessages,
				"Keenie: No articles found based on your query.",
			]);
			setLoading(false);
			return;
		}

		setMessages((prevMessages) => [
			...prevMessages,
			"Keenie: Sure, here's what I found! Please check the main page for the details",
		]);

		setArticles(articles);

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
				placeholder="Ask Keenie, our AI model"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
				disabled={loading}
			/>

			<Button
				variant="contained"
				color="secondary"
				onClick={handleSendMessage}
				sx={{ marginTop: "8px" }}
			>
				{loading ? "Loading..." : "Ask"}
			</Button>
		</Paper>
	);
};
