import React from "react";
import styled from "styled-components";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import whiteLogo from "../../assets/img/company/whiteLogoOnly.png";
import whiteName from "../../assets/img/company/whiteNameOnly.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <GridContainer>
          {/* Logo and Company Info */}
          <Column>
            <LogoContainer>
              <Logo />
              <CompanyName>
                <img src={whiteName} alt="Company Name" />
              </CompanyName>
            </LogoContainer>
            <Description>
              <span>Where Vision meets Precision</span>
              <br />
              <p>
                Experience our innovative approach,
                <br /> bring your vision to life with us.
              </p>
            </Description>
          </Column>

          {/* Contact Info */}
          <Column>
            <Title>Contact Us</Title>
            <ContactList>
              <ContactLink href="mailto:abduraufsawadjaan@gmail.com">
                <Mail size={16} />
                abduraufsawadjaan@gmail.com
              </ContactLink>

              <ContactLink href="tel:+1234567890">
                <Phone size={16} />
                +63 935 695 1625
              </ContactLink>
            </ContactList>
          </Column>

          {/* Social Media */}
          <Column>
            <Title>Follow Us</Title>
            <SocialLinks>
              <SocialLink href="https://www.facebook.com/ASEConsultancy2024">
                <Facebook size={24} />
              </SocialLink>
            </SocialLinks>
          </Column>
        </GridContainer>

        <BottomBar>
          <p>
            © {currentYear} Abdurauf Sawadjaan Engineering Consultancy. All
            rights reserved.
          </p>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.footer`
  background-color: #111;
  color: #d1d5db;
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Logo = styled.div`
  height: 2rem;
  width: 4rem;
  background-image: url(${whiteLogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 0.5rem;
`;

const CompanyName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  img {
    max-width: 200px;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  text-align: center;
  span {
    font-weight: bold;
    font-size: 1.125rem;
  }
  p {
    font-style: italic;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const BottomBar = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #888;
  text-align: center;
  font-size: 0.875rem;
`;
