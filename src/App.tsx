import { useState } from "react";
import "./App.css";
import { ChatBubble } from "./components/ChatBubble";
import { LandingPage } from "./pages/LandingPage";
import type { Article } from "./types"; // Import the Article type

export function App() {
	// Move the articles state to the App component
	const [articles, setArticles] = useState<Article[]>([]);

	return (
		<>
			<LandingPage articles={articles} />
			<ChatBubble setArticles={setArticles} />
		</>
	);
}
