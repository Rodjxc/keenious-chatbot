import { useState } from "react";
import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { ChatWindow } from "./ChatWindow";

export const ChatBubble = () => {
	const [open, setOpen] = useState(false);

	const [messages, setMessages] = useState<string[]>([]);

	return (
		<>
			<Fab
				color="secondary"
				aria-label="chat"
				sx={{ position: "fixed", bottom: "40px", right: "40px" }}
				onClick={() => setOpen(!open)}
			>
				<ChatIcon />
			</Fab>

			{open && <ChatWindow messages={messages} setMessages={setMessages} />}
		</>
	);
};
