"use client";
import styled from "styled-components";

export default function Home() {
	const Title = styled.h1`
		font-size: 30px;
		font-weight: bold;
		color: red;
	`;
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Title>Title</Title>
		</main>
	);
}
