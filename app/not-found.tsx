"use client";
import Link from "next/link";
import styled from "styled-components";

const NotFound = () => {
	return (
		<StyledNotFound>
			<StyledErr1>4</StyledErr1>
			<StyledErr2>0</StyledErr2>
			<StyledErr3>4</StyledErr3>
			<StyledMsg>
				<p>
					Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
					existed in the first place?
					<br />
					Let's go <StyledHomeLink href="/">home</StyledHomeLink> and try from
					there.
				</p>
			</StyledMsg>
		</StyledNotFound>
	);
};

export default NotFound;

const StyledNotFound = styled.div`
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
`;

const StyledErr1 = styled.div`
  color: #ffffff;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 11rem;
  position: absolute;
  left: 20%;
  top: 8%;
`;

const StyledErr2 = styled(StyledErr1)`
 left: 42%;
`;

const StyledErr3 = styled(StyledErr1)`
  left: 68%;
`;

const StyledMsg = styled.div`
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.6rem;
  position: absolute;
  left: 16%;
  top: 45%;
  width: 75%;
`;

const StyledHomeLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
