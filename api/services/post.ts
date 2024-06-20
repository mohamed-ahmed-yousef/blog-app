import type { AxiosInstance } from "axios";

export class PostsAPI {
	constructor(private http: AxiosInstance) {}

	getPosts = ({ pageParam = 1 }) => {
		return this.http
			.get("/posts", { params: { _limit: 10, offset: pageParam } })
			.then((res) => {
				return res.data;
			});
	};

	getOnePost = (id: string) => {
		return this.http.get<
			{
				userId: 3;
				id: number;
				title: string;
				body: string;
			}[]
		>(`/posts/${id}`);
	};
}
