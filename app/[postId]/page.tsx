"use client";
import { useGetOnePost } from "@/api/hooks/use-posts";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import NotFound from "../not-found";

export default function CurrentPost({
	params,
}: { params: { postId: string } }) {
	const { data, isPending } = useGetOnePost({ id: params.postId });
	if (isPending) return <LoadingSpinner className="w-20 m-auto" />;
	if (!data) return <NotFound />;

	return (
		<main>
			<h1>{data.title}</h1>
			<h1>{data.userId}</h1>
			<h1>{data.id}</h1>
			<h1>{data.body}</h1>
		</main>
	);
}
