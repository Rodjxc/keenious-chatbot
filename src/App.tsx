import { useState } from "react";
import "./App.css";
import { ChatBubble } from "./components/ChatBubble";
import { LandingPage } from "./pages/LandingPage";
import type { Article } from "./types";

export function App() {
	const [articles, setArticles] = useState<Article[]>([]);

	return (
		<>
			<LandingPage articles={articles} />
			<ChatBubble setArticles={setArticles} />
		</>
	);
}
