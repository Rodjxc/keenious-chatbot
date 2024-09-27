import { useState } from "react";
import {
	Paper,
	TextField,
	Button,
	List,
	ListItem,
	Typography,
} from "@mui/material";

export const ChatWindow: React.FC = () => {
	const [userInput, setUserInput] = useState("");
	const [messages, setMessages] = useState<string[]>([]);

	const handleSendMessage = () => {
		//Prevents sending empty messages
		if (userInput.trim() === "") return;

		// Append user message to chat
		setMessages([...messages, `You: ${userInput}`]);

		// Clear input field after sending a message
		setUserInput("");

		// TODO: Handle API calls here
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
					flexGrow: 1, // Take up remaining space
					overflowY: "auto", // Allow scrolling
					marginBottom: "16px", // Add space between messages and input
					"&::-webkit-scrollbar": {
						width: "8px",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "purple", // Thumb color
						borderRadius: "5px",
					},
					"&::-webkit-scrollbar-thumb:hover": {
						backgroundColor: "gray", // Color when hovered
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

			{/* Input field */}
			<TextField
				fullWidth
				variant="standard"
				placeholder="Ask Keenie, our AI model"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
			/>

			<Button
				variant="contained"
				color="secondary"
				onClick={handleSendMessage}
				sx={{ marginTop: "8px" }}
			>
				Ask
			</Button>
		</Paper>
	);
};
