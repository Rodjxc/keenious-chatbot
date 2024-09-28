import {
	Card,
	CardContent,
	Container,
	Divider,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import type { LandingPageProps } from "../types";

export const LandingPage: React.FC<LandingPageProps> = ({ articles }) => {
	if (!articles || articles.length === 0) {
		return (
			<Typography variant="h6" sx={{ marginTop: "20%" }}>
				Here will appear the list of articles. Try asking Keenie, our AI-driven
				chatbot.
			</Typography>
		);
	}

	return (
		<Container sx={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
			{/*Had to use the deprecated Grid, since I had issues with the Grid2 version of the docs*/}
			<Grid container spacing={4} justifyContent="center">
				{articles.map((article, index) => (
					<Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
						<Card
							sx={{
								width: "100%",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
								borderRadius: "10px",
								transition:
									"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
								"&:hover": {
									transform: "translateY(-5px)",
									boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
								},
								margin: "0 auto",
								maxWidth: "350px",
							}}
						>
							<CardContent>
								<Typography variant="h6" gutterBottom>
									{article.title}
								</Typography>
								<Divider sx={{ margin: "10px 0" }} />
								<Typography variant="body2" color="text.secondary">
									Year: {article.publication_year}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Citations: {article.cited_by_count}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Open Access: {article.is_oa ? "Yes" : "No"}
								</Typography>
								<Divider sx={{ margin: "10px 0" }} />
								<Typography variant="body2">{article.summary}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
