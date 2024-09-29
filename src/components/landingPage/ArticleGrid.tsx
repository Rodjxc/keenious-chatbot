import Grid from "@mui/material/Grid";
import type { ArticleGridProps } from "../../types";
import { ArticleCard } from "./ArticleCard";

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => (
	<Grid container spacing={4} justifyContent="center">
		{/*Had to use the deprecated Grid, since I had issues with the Grid2 version of the docs*/}

		{articles.map((article, index) => (
			<Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
				<ArticleCard article={article} />
			</Grid>
		))}
	</Grid>
);
