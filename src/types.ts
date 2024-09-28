import type { Dispatch, SetStateAction } from "react";

export interface Article {
	id: string;
	title: string;
	publication_year: number;
	cited_by_count: number;
	is_oa: boolean;
	summary: string;
}

export interface ChatWindowProps {
	messages: string[];
	setMessages: Dispatch<SetStateAction<string[]>>;
	setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

export interface LandingPageProps {
	articles: Article[];
}

export interface SummarizedArticle extends Article {
	summary: string;
}
