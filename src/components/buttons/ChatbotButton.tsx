import { Button } from "@mui/material";
import type { ChatbotButtonProps } from "../../types";

export const ChatbotButton: React.FC<ChatbotButtonProps> = ({
	onClick,
	loading,
}) => {
	return (
		<Button
			variant="contained"
			color="secondary"
			onClick={onClick}
			disabled={loading}
			sx={{ marginTop: "8px" }}
		>
			{loading ? "Hold tight, I'm looking for it" : "Ask me!"}
		</Button>
	);
};
