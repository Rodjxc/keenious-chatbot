import type { Dispatch, SetStateAction } from "react";

//############  LandingPage    ##################

// For main list of Articles in LandingPage
export interface Article {
	id: string;
	title: string;
	publication_year: number;
	cited_by_count: number;
	is_oa: boolean;
	summary: string;
}

// For articles grid

export interface ArticleGridProps {
	articles: Article[];
}

// For Chat window

export interface ChatWindowProps {
	messages: string[];
	setMessages: Dispatch<SetStateAction<string[]>>;
	setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

//For Articles Display
export interface LandingPageProps {
	articles: Article[];
}

// For OpenAlex - ChatGPT response
export interface SummarizedArticle extends Article {
	summary: string;
}

// For chatbot button

export interface ChatbotButtonProps {
	onClick: () => void;
	loading: boolean;
}
