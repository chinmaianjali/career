import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8f9fa, #e2e2e2);
  color: #333;
  text-align: left;
  justify-content: space-between; /* Space between text and image */
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 50%; /* Adjusted max-width for better alignment */
  margin-right: 20px; /* Space between text and image */
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #555;
`;

const HeroDescription = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const HeroCallout = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #007bff;
  margin-top: 20px;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%; /* Adjust as needed to fit the layout */
  height: auto;
  object-fit: cover; /* Ensures the image covers its area */
  /* Removed border-radius and box-shadow */
  obhect-fit : cover;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Your personal guide buddy for a professional success.
        </HeroTitle>
        <HeroSubtitle>
          "Unlock your potential with Expert Guidance and Predictions"
        </HeroSubtitle>
        <HeroDescription>
          At CareerBuddy we are dedicated to empowering students with the tools and resources they need to excel. Whether you are 
          exploring career paths, or seeking expert advice, our platform is designed to support your journy to sucess.Join a vibrant
          community of mentors,access to top-tier predictions and unlock your true potential.
        </HeroDescription>
        <HeroCallout>
          Your future starts  HERE - lets make it extraordinary together.
        </HeroCallout>
      </HeroContent>
      <HeroImage
        src="https://th.bing.com/th/id/OIP.snqhESh7D9hF58MhcrKN-AHaE-?w=294&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7" // Replace with your image URL
        alt="Hero Image"
      />
    </HeroSection>
  );
};

export default Hero;

/*
import React from "react";
import styled from "styled-components";

const HeroSection = styled.section
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8f9fa, #e2e2e2);
  color: #333;
  text-align: center;
;

const HeroContent = styled.div
  max-width: 800px;
;

const HeroTitle = styled.h1
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
;

const HeroSubtitle = styled.h4
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #555;
;

const HeroDescription = styled.div
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 30px;
  padding: 0 20px;
;

const HeroCallout = styled.h3
  font-size: 1.25rem;
  font-weight: 600;
  color: #007bff;
  margin-top: 20px;
;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Maximize Your Reach and Engagement with Our Smart Content Solutions
        </HeroTitle>
        <HeroSubtitle>
          "Transform Your Content Strategy with Data-Driven Predictions"
        </HeroSubtitle>
        <HeroDescription>
          Our app harnesses the power of machine learning to provide you with
          tailored insights and predictions for your content. With real-time
          data analysis and performance metrics, you can easily track and
          enhance your content's effectiveness. Make informed decisions and
          optimize your strategy for maximum impact and engagement.
        </HeroDescription>
        <HeroCallout>
          Make your content work for you and let us help to predict your reach
        </HeroCallout>
      </HeroContent>
    </HeroSection>
  );
};
*/