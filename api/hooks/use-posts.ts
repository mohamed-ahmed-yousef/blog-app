import { useInfiniteQuery } from "@tanstack/react-query";
import { clientAPI } from "../config/api-client";

export function useGetPosts() {
	return useInfiniteQuery({
		queryKey: ["posts"],
		queryFn: clientAPI.posts.getPosts,
		initialPageParam: 0,
		getNextPageParam: (_, pages) => {
			return pages.length <= 10 ? pages.length + 1 : undefined;
		},
	});
}
