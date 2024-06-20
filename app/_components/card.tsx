import type { Page } from "@/types";
import Link from "next/link";
import styled from "styled-components";

const StyledPostCard = styled.section`
  display: flex; 
  flex-direction: column; 
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  background-color: #94a3b8;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #cbd5e1;
  }`;

const H1 = styled.h1`
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
  `;

export default function PostCard({ page }: { page: Page }) {
	return (
		<StyledPostCard>
			<H1>{page.title}</H1>
			<Link href={`${page.id}`} className="unerline text-blue-600">
				Read more
			</Link>
		</StyledPostCard>
	);
}
