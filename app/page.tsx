"use client";
import { useGetPosts } from "@/api/hooks/use-posts";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import type { Pages } from "@/types";
import PostCard from "./_components/card";
// import styled from "styled-components";

export default function Home() {
	// const Title = styled.h1`
	// 	font-size: 30px;
	// 	font-weight: bold;
	// 	color: red;
	// `;

	const { data, isPending, fetchNextPage, hasNextPage } = useGetPosts();
	if (isPending || !data)
		return <LoadingSpinner className="m-auto w-20  h-screen" />;

	const newData: Pages = data.pages;

	return (
		<main className="">
			<p>Title</p>
			{Array.isArray(newData) &&
				newData.map((page) =>
					page.map((ele) => <PostCard key={ele.id} page={ele} />),
				)}

			<button
				type="button"
				disabled={isPending || !hasNextPage}
				onClick={() => fetchNextPage()}
			>
				Load more
			</button>
		</main>
	);
}
