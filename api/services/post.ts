import type { AxiosInstance } from "axios";

export class PostsAPI {
	constructor(private http: AxiosInstance) {}

	getPosts = ({ pageParam = 1 }) => {
		return this.http
			.get("/posts", { params: { _limit: 25, offset: pageParam } })
			.then((res) => {
				return res.data;
			});
	};

	getOnePost = (id: string) => {
		return this.http
			.get<{
				userId: number;
				id: number;
				title: string;
				body: string;
			}>(`/posts/${id}`)
			.then((res) => res.data);
	};
}
