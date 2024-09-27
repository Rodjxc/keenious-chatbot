import { useState } from "react";
import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { ChatWindow } from "./ChatWindow";

export const ChatBubble: React.FC = () => {
	const [open, setOpen] = useState(false);

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

			{open && <ChatWindow />}
		</>
	);
};
