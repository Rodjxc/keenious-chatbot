import { Container, Paper, Typography } from "@mui/material";

export const LandingPage = () => {
	return (
		<Container maxWidth="md">
			<Paper elevation={3} sx={{ padding: "16px", marginBottom: "16px" }}>
				<Typography variant="h4">Keenius chatbot app Main</Typography>
			</Paper>
		</Container>
	);
};
