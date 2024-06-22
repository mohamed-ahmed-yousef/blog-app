import type { Page } from "@/types";

export const getCurrentPosts = (): Page[] => {
	const posts = localStorage.getItem("posts");
	return posts ? JSON.parse(posts) : [];
};

export const addNewPost = (data: Omit<Page, "userId" | "id">) => {
	const currentPosts = getCurrentPosts();
	const newId = currentPosts.length + 100 + 1;
	const newData = {
		...data,
		userId: Math.floor(Math.random() * 91) + 10,
		id: newId,
	};
	localStorage.setItem("posts", JSON.stringify([...currentPosts, newData]));
};
