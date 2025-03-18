import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>&copy; 2025 MyStore. All rights reserved.</CopyrightText>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank">Facebook</SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">Twitter</SocialLink>
          <SocialLink href="https://instagram.com" target="_blank">Instagram</SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components for Footer

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  text-align: center;
`;

const CopyrightText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1rem;

  &:hover {
    color: #007bff;
    transition: color 0.3s;
  }
`;
