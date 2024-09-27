import type { Dispatch, SetStateAction } from "react";

export interface ChatWindowProps {
	messages: string[];
	setMessages: Dispatch<SetStateAction<string[]>>;
}

export interface Article {
	title: string;
	publication_year: number;
	cited_by_count: number;
	is_oa: boolean;
}
