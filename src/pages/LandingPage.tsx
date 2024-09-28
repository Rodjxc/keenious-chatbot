import { Card, CardContent, Container, Link, Typography } from "@mui/material";
import type { LandingPageProps } from "../types";

export const LandingPage: React.FC<LandingPageProps> = ({ articles }) => {
	if (!articles || articles.length === 0) {
		return (
			<Typography variant="h6">
				Here will appear the list of articles. Try asking Keenie, our AI driven
				chatbot
			</Typography>
		);
	}

	return (
		<Container sx={{ padding: "40px" }}>
			{articles.map((article, index) => (
				<Card key={index} sx={{ marginBottom: "20px" }}>
					<CardContent>
						<Typography variant="h6">{article.title}</Typography>
						<Typography variant="body2">
							Year: {article.publication_year}
						</Typography>
						<Typography variant="body2">
							Citations: {article.cited_by_count}
						</Typography>
						<Typography variant="body2">
							Open Access: {article.is_oa ? "Yes" : "No"}
						</Typography>
						<Typography variant="body2" sx={{ marginTop: "10px" }}>
							{article.summary}
						</Typography>
					</CardContent>
				</Card>
			))}
		</Container>
	);
};
