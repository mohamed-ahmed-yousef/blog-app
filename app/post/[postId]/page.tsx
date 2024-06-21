"use client";
import { useGetOnePost } from "@/api/hooks/use-posts";
import { getCurrentPosts } from "@/app/create-post/page";
import { Main } from "@/components/styled-components/main";
import { P } from "@/components/styled-components/p";
import { Section } from "@/components/styled-components/section";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import Link from "next/link";
import styled from "styled-components";
import NotFound from "../../not-found";

export default function CurrentPost({
	params,
}: { params: { postId: string } }) {
	const { data, isPending } = useGetOnePost({ id: params.postId });
	const createdPost = getCurrentPosts().find(
		(post) => post.id === Number(params.postId),
	);

	if (isPending)
		return (
			<div className="fixed flex items-center justify-center w-screen h-screen overflow-hidden">
				<LoadingSpinner size={40} className="absolute m-0" />
			</div>
		);

	const finalData = { ...data, ...createdPost };
	console.info(finalData, data, createdPost, "final data");
	if (!finalData) return <NotFound />;
	console.info(finalData, "final data");

	return (
		<Main>
			<Section>
				<Title>{finalData.title}</Title>
				<Subtitle>User ID: {finalData.userId}</Subtitle>
				<Subtitle>Post ID: {finalData.id}</Subtitle>
				<P>{finalData.body}</P>
				<Link href="/" className="mt-6 text-blue-600 underline">
					Go Back
				</Link>
			</Section>
		</Main>
	);
}

const Title = styled.h1`
  font-size: 2rem;
  color:#1e293b;
  font-weight: 600;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #0f172a;
  font-weight: 500;
`;
