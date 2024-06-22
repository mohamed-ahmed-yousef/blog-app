"use client";
import { useGetPosts } from "@/api/hooks/use-posts";
import { Button } from "@/components/styled-components/button";
import { CustomizeSpinner } from "@/components/styled-components/loading-spinner";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import type { Pages } from "@/types";
import { Plus } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import PostCard from "./_components/card";
import { getCurrentPosts } from "./_components/lib/add-post";

export default function Home() {
	const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useGetPosts();
	if (isPending || !data) return <CustomizeSpinner />;

	const newData: Pages = data.pages;
	const createdPost = getCurrentPosts();
	return (
		<main className="page-container bg-slate-900 text-slate-950">
			<Flex>
				<Title>Posts</Title>
				<Flex>
					<Button type="button">
						<Link href="/create-post">
							<Flex>
								<Plus /> Add Post
							</Flex>
						</Link>
					</Button>
				</Flex>
			</Flex>
			<section className="md:grid-cols-2 lg:grid-cols-3 grid gap-3">
				{createdPost.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
				{Array.isArray(newData) &&
					newData.map((page) =>
						page.map((post) => <PostCard key={post.id} post={post} />),
					)}
			</section>
			<Button
				type="button"
				disabled={isPending || !hasNextPage || isFetchingNextPage}
				onClick={() => fetchNextPage()}
			>
				{isFetchingNextPage || isPending ? (
					<>
						loading... <LoadingSpinner />
					</>
				) : !hasNextPage ? (
					"No more data"
				) : (
					"Load more"
				)}
			</Button>
		</main>
	);
}

const Title = styled.h1`
	margin: .2rem 0px;
	font-size: 2.5rem;
	font-weight: 500;
	color: #e2e8f0;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
