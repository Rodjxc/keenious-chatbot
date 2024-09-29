import { Box, Typography } from "@mui/material";

export const Hero = () => {
	return (
		<div>
			<Box sx={{ width: "100%", marginTop: "10rem" }}>
				<Typography variant="h1">Meet Keenie. Our AI driven chatbot</Typography>
				<Typography variant="h4" sx={{ marginTop: "40px" }}>
					Try asking something on the chat!
				</Typography>
			</Box>
		</div>
	);
};
