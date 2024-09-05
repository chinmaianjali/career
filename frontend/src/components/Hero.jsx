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
`;

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
      <HeroImage
        src="https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-content-creator-background-vector-illustration-of-freelancer-blogger-and-video-vlogger-png-image_4726845.png" // Replace with your image URL
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