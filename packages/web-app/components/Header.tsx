import styled from "styled-components";
import Image from "next/image";
import { BrandLogo } from "@/app/appStyles";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #0070f3;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <BrandLogo>ConvertIT</BrandLogo>
      <Nav>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#integrations">Integrations</NavLink>
        <NavLink href="#templates">Templates</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
