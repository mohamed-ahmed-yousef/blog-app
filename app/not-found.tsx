"use client";
import { StyledLink } from "@/components/styled-components/link";
import styled from "styled-components";

const NotFound = () => {
	return (
		<Main>
			<Flex>
				<FourOFour>4</FourOFour>
				<FourOFour>0</FourOFour>
				<FourOFour>4</FourOFour>
			</Flex>
			<StyledMsg>
				<p>This page Not Found</p>
				<p>
					Let's go <StyledLink href="/">home</StyledLink> and try from there.
				</p>
			</StyledMsg>
		</Main>
	);
};
export default NotFound;

const Main = styled.main`
color: #e2e8f0;
background-color: #020617;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
position: relative;
flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const FourOFour = styled.div`
  color: #ffffff;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 11rem;
  
`;

const StyledMsg = styled.div`
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.6rem;
  width: 75%;
`;
