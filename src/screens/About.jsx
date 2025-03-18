import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroText>
          <h1>About Us</h1>
          <p>We are a passionate company dedicated to providing top-notch products!</p>
        </HeroText>
      </HeroSection>

      {/* Mission Section */}
      <MissionSection>
        <h2>Our Mission</h2>
        <p>
          At MyStore, we aim to revolutionize the way people shop by offering
          high-quality, affordable products, backed by excellent customer service.
        </p>
      </MissionSection>

      {/* Vision Section */}
      <VisionSection>
        <h2>Our Vision</h2>
        <p>
          Our vision is to become the most trusted online marketplace by
          continually improving and offering products that meet the needs of our
          customers.
        </p>
      </VisionSection>

      {/* Our Team Section */}
      <TeamSection>
        <h2>Our Team</h2>
        <p>Meet the wonderful people behind MyStore.</p>
        <TeamMembers>
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Team member" />
            <p>John Doe - CEO</p>
          </TeamMember>
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Team member" />
            <p>Jane Smith - CTO</p>
          </TeamMember>
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Team member" />
            <p>Sarah Lee - Marketing</p>
          </TeamMember>
        </TeamMembers>
      </TeamSection>

      {/* Contact Callout */}
      <ContactCallout>
        <h3>Contact Us</h3>
        <p>Want to know more? Reach out to us!</p>
        <Button>Contact Us</Button>
      </ContactCallout>
    </AboutContainer>
  );
};

export default About;

// Styled Components

const AboutContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  background: #007bff;
  color: white;
  padding: 80px 0;
  text-align: center;
  background-image: url('https://via.placeholder.com/1600x600');
  background-size: cover;
  background-position: center;
`;

const HeroText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    font-weight: 300;
  }
`;

const MissionSection = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.125rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const VisionSection = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.125rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const TeamSection = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.125rem;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  text-align: center;
  width: 150px;
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
  }
  p {
    font-size: 1rem;
  }
`;

const ContactCallout = styled.section`
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 40px;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 30px;
  }
`;

const Button = styled.button`
  background-color: #ff6f61;
  color: white;
  padding: 12px 24px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ff4b3f;
  }
`;
