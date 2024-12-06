import styled from "styled-components";
import Image from "next/image";
import { BrandLogo } from "@/app/appStyles";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 60px 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin-bottom: 30px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const Link = styled.a`
  display: block;
  color: #666;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    color: #0070f3;
  }
`;

const Copyright = styled.p`
  text-align: center;
  color: #666;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <BrandLogo>ConvertIT</BrandLogo>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <Link href="#">Pricing</Link>
          <Link href="#">Features</Link>
          <Link href="#">Integrations</Link>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Solutions</FooterTitle>
          <Link href="#">Onboarding</Link>
          <Link href="#">Surveys</Link>
          <Link href="#">HTML Embed</Link>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <Link href="#">Blog</Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Zapier Integration</Link>
        </FooterSection>
      </FooterContent>
      <Copyright>© 2024 Converit. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
