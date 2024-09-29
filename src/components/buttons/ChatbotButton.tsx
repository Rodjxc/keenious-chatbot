import { Button, CircularProgress } from "@mui/material";
import type { ChatbotButtonProps } from "../../types";

export const ChatbotButton: React.FC<ChatbotButtonProps> = ({
	onClick,
	loading,
}) => {
	return (
		<Button
			variant="contained"
			onClick={onClick}
			disabled={loading}
			sx={{ marginTop: "8px", backgroundColor: "#6030FF" }}
		>
			{loading ? (
				<>
					<CircularProgress
						size={20}
						sx={{ color: "white", marginRight: "8px" }}
					/>
					I'm looking for it...
				</>
			) : (
				"Ask me!"
			)}
		</Button>
	);
};
