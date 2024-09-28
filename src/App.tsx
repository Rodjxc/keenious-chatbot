import { useState } from "react";
import "./App.css";
import { ChatBubble } from "./components/ChatBubble";
import { LandingPage } from "./pages/LandingPage";
import type { Article } from "./types";

interface SummarizedArticle extends Article {
	summary: string; // The summarized response from ChatGPT
}

export function App() {
	const [articles, setArticles] = useState<SummarizedArticle[]>([]);

	return (
		<>
			<LandingPage articles={articles} />
			<ChatBubble setArticles={setArticles} />
		</>
	);
}
