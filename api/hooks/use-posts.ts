import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { clientAPI } from "../config/api-client";

export function useGetPosts() {
	return useInfiniteQuery({
		queryKey: ["posts"],
		queryFn: clientAPI.posts.getPosts,
		initialPageParam: 0,
		getNextPageParam: (_, pages) => {
			return pages.length <= 4 ? pages.length + 1 : undefined;
		},
	});
}
export function useGetOnePost({ id }: { id: string }) {
	return useQuery({
		queryKey: ["post"],
		queryFn: () => clientAPI.posts.getOnePost(id),
	});
}
