"use client";
import { useGetOnePost } from "@/api/hooks/use-posts";
import { getCurrentPosts } from "@/app/_components/lib/add-post";
import { StyledLink } from "@/components/styled-components/link";
import { CustomizeSpinner } from "@/components/styled-components/loading-spinner";
import { Main } from "@/components/styled-components/main";
import { P } from "@/components/styled-components/p";
import { Section } from "@/components/styled-components/section";
import type { Page } from "@/types";
import styled from "styled-components";
import NotFound from "../../not-found";

export default function CurrentPost({
	params,
}: { params: { postId: string } }) {
	const { data, isPending } = useGetOnePost({ id: params.postId });
	const createdPost = getCurrentPosts().find(
		(post: Page) => post.id === Number(params.postId),
	);

	if (isPending) return <CustomizeSpinner />;

	const finalData = { ...data, ...createdPost };
	console.info(finalData, data, createdPost, "final data");
	if (!data || !createdPost) return <NotFound />;
	console.info(finalData, "final data");

	return (
		<Main>
			<Section>
				<Title>{finalData.title}</Title>
				<Subtitle>User ID: {finalData.userId}</Subtitle>
				<Subtitle>Post ID: {finalData.id}</Subtitle>
				<P>{finalData.body}</P>
				<StyledLink href="/">Go Back</StyledLink>
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
