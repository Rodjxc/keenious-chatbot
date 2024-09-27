import "./App.css";
import { ChatBubble } from "./components/ChatBubble";
import { LandingPage } from "./pages/LandingPage";

export function App() {
	return (
		<>
			<LandingPage />
			<ChatBubble />
		</>
	);
}
