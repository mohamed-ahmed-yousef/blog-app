import type { AxiosInstance } from "axios";
import { PostsAPI } from "../services/post";

export function getAPI(http: AxiosInstance) {
	return {
		posts: new PostsAPI(http),
	};
}
