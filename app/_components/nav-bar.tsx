import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
	return (
		<StyledNav>
			<NavLink href="/">Home</NavLink>
			<NavLink href="/create-post">Create post</NavLink>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
  background-color: #334155; 
  display: flex;
  align-items: center;
  padding: 1rem 2rem; 
  gap: 20px;
  height: 60px;
  box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);
	color: #e2e8f0;
`;

const NavLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: 600;
`;
