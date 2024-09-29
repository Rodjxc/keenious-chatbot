import { Card, CardContent, Typography, Divider } from "@mui/material";
import type { Article } from "../../types";

interface ArticleCardProps {
	article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
	<Card
		sx={{
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
			borderRadius: "10px",
			transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
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
);
