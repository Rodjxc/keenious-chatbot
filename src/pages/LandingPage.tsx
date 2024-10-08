import { Container } from "@mui/material";
import type { LandingPageProps } from "../types";
import { ArticleGrid } from "../components/landingPage/ArticleGrid";
import { Hero } from "../components/layout/Hero";
import { Footer } from "../components/layout/Footer";

export const LandingPage: React.FC<LandingPageProps> = ({ articles }) => (
	<>
		<Container
			sx={{
				paddingX: { xs: "1rem", sm: "2rem", md: "4rem" },
				paddingY: "40px",
				maxWidth: "1200px",
				margin: "0 auto",
				marginBottom: "6rem",
			}}
		>
			{!articles || articles.length === 0 ? (
				<Hero />
			) : (
				<ArticleGrid articles={articles} />
			)}
		</Container>
		<Footer />
	</>
);
