"use client";
import { useGetOnePost } from "@/api/hooks/use-posts";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import Link from "next/link";
import styled from "styled-components";
import NotFound from "../../not-found";

export default function CurrentPost({
	params,
}: { params: { postId: string } }) {
	const { data, isPending } = useGetOnePost({ id: params.postId });
	if (isPending)
		return <LoadingSpinner size={100} className=" h-screen m-auto" />;
	if (!data) return <NotFound />;

	return (
		<Main>
			<Section>
				<Title>{data.title}</Title>
				<Subtitle>User ID: {data.userId}</Subtitle>
				<Subtitle>Post ID: {data.id}</Subtitle>
				<P>{data.body}</P>
				<Link href="/" className="mt-6 text-blue-600 underline">
					Go Back
				</Link>
			</Section>
		</Main>
	);
}

const Main = styled.main`
	display: flex;
	justify-items: center;
	height: 100vh;
	align-items: center;
	background-color: #0f172a;
`;
const Section = styled.section`
  padding: 20px;
    border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	max-width: 800px;
  margin: 40px auto;
  color: #020617;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  background-color: #94a3b8;

&:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #cbd5e1;
}
`;

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
const P = styled.p`
	font-size:1.1rem;
	margin: .4rem 0px;
	
`;
