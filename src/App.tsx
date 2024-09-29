import { useState } from "react";
import "./App.css";
import { ChatBubble } from "./components/ChatBubble";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./components/layout/Navbar";
import type { SummarizedArticle } from "./types";

export function App() {
	const [articles, setArticles] = useState<SummarizedArticle[]>([]);

	return (
		<>
			<Navbar />
			<LandingPage articles={articles} />
			<ChatBubble setArticles={setArticles} />
		</>
	);
}
