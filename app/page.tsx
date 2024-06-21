"use client";
import { useGetPosts } from "@/api/hooks/use-posts";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import type { Pages } from "@/types";
import { Plus } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import PostCard from "./_components/card";

export default function Home() {
	const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useGetPosts();
	if (isPending || !data)
		return <LoadingSpinner className="w-20 h-screen m-auto" />;

	const newData: Pages = data.pages;
	// console.info(newData, "page info");
	return (
		<main className="page-container bg-slate-900 text-slate-950">
			<Flex>
				<Title>Posts</Title>
				<Flex>
					<Button>
						<Link href="/create-post">
							<Flex>
								<Plus /> Add Post
							</Flex>
						</Link>
					</Button>
				</Flex>
			</Flex>
			<section className="md:grid-cols-2 lg:grid-cols-3 grid gap-3">
				{Array.isArray(newData) &&
					newData.map((page) =>
						page.map((ele) => <PostCard key={ele.id} page={ele} />),
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

export const Button = styled.button`
  background-color: #1e293b;

margin: 20px auto;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display:flex;
  

  &:hover {
    background-color: #334155; 
  }
  &[disabled] {
    background-color: #808080; 
    cursor: not-allowed;
    opacity: 0.5; 
  }
`;
