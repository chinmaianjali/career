import React, { useState } from "react";
import styled from "styled-components";

// Slide Components with Prediction Info
const Slide1 = () => (
  <Slide>
    <Card>
      <TextContent>
        <h2></h2>
        <p>
          Channel Age represents the duration since a YouTube channel was
          created. It is typically measured in months or years..
        </p>
        <p>
          <strong>Prediction Info:</strong> Estimated views could be around
          22,301.
        </p>
      </TextContent>
      <img
        src="https://images.unsplash.com/photo-1673648954658-212203f00a0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
        alt="Welcome"
      />
    </Card>
  </Slide>
);

const Slide2 = () => (
  <Slide>
    <Card>
      <TextContent>
        <h2>Explore Features</h2>
        <p>
          From content creation to analytics, find all you need in one place.
        </p>
        <p>
          <strong>Prediction Info:</strong> Expected likes could be
          approximately 105.
        </p>
      </TextContent>
      <img
        src="https://images.unsplash.com/photo-1621184078796-c7452e5a5f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
        alt="Features"
      />
    </Card>
  </Slide>
);

const Slide3 = () => (
  <Slide>
    <Card>
      <TextContent>
        <h2>Get Started Today</h2>
        <p>Sign up now and start creating amazing content with ease.</p>
        <p>
          <strong>Prediction Info:</strong> Anticipated comments might be around
          24.
        </p>
      </TextContent>
      <img
        src="https://images.unsplash.com/photo-1642491068210-943797352958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
        alt="Get Started"
      />
    </Card>
  </Slide>
);

const Slide4 = () => (
  <Slide>
    <Card>
      <TextContent>
        <h2>Additional Insights</h2>
        <p>
          Learn more about the insights we provide and how they can benefit you.
        </p>
        <p>
          <strong>Prediction Info:</strong> Average shares might be
          approximately 11.67.
        </p>
      </TextContent>
      <img
        src="https://images.unsplash.com/photo-1673648954658-212203f00a0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
        alt="Insights"
      />
    </Card>
  </Slide>
);

const Slide5 = () => (
  <Slide>
    <Card>
      <TextContent>
        <h2>Explore Features</h2>
        <p>
          From content creation to analytics, find all you need in one place.
        </p>
        <p>
          <strong>Prediction Info:</strong> You may gain around 918 subscribers.
        </p>
      </TextContent>
      <img
        src="https://images.unsplash.com/photo-1621184078796-c7452e5a5f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
        alt="Features"
      />
    </Card>
  </Slide>
);
const Slide6 = () => (
  <Slide>
    <Card>
      <TextContent>
        <h2>Welcome to Our App</h2>
        <p>Discover a new way to manage your content effortlessly.</p>
        <p>
          <strong>Prediction Info:</strong> Estimated views could be around
          22,301.
        </p>
      </TextContent>
      <img
        src="https://images.unsplash.com/photo-1673648954658-212203f00a0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
        alt="Welcome"
      />
    </Card>
  </Slide>
);

const Ml = () => {
  const [inputData, setInputData] = useState({
    channel_age: "",
    subscriber_count: "",
    total_videos: "",
    total_views: "",
    average_likes: "",
    average_comments: "",
    average_shares: "",
    upload_frequency: "",
    video_quality_score: "",
    social_media_followers: "",
    content_type: "",
    target_audience_age_group: "",
    target_audience_interests: "",
    advertising_spend: "",
  });

  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6]; // Predefined Slides

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await response.json();
      setPredictions(data);
    } catch (error) {
      setError("An error occurred while fetching predictions.");
    }
  };

  return (
    <Container>
      <Content>
        <SlidesContainer>
          {slides.map((SlideComponent, index) => (
            <SlideComponent key={index} />
          ))}
        </SlidesContainer>

        <Form onSubmit={handleSubmit}>
          <h1>Content Prediction App</h1>
          {Object.keys(inputData).map((key) => (
            <FormGroup key={key}>
              <label htmlFor={key}>
                {key.replace(/_/g, " ").toUpperCase()}
              </label>
              <p>Please enter the {key.replace(/_/g, " ")}</p>
              <input
                type="text"
                id={key}
                name={key}
                value={inputData[key]}
                onChange={handleChange}
                required
              />
            </FormGroup>
          ))}
          <SubmitButton type="submit">Get Predictions</SubmitButton>
        </Form>
      </Content>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {predictions && (
        <Results>
          <h2>Prediction Results:</h2>
          <ResultsGrid>
            <ResultCard>
              <CardTitle>Predicted Views</CardTitle>
              <CardValue>{predictions.predicted_views.toFixed(2)}</CardValue>
            </ResultCard>
            <ResultCard>
              <CardTitle>Predicted Likes</CardTitle>
              <CardValue>{predictions.predicted_likes.toFixed(2)}</CardValue>
            </ResultCard>
            <ResultCard>
              <CardTitle>Predicted Comments</CardTitle>
              <CardValue>{predictions.predicted_comments.toFixed(2)}</CardValue>
            </ResultCard>
            <ResultCard>
              <CardTitle>Predicted Average Shares</CardTitle>
              <CardValue>
                {predictions.predicted_average_shares.toFixed(2)}
              </CardValue>
            </ResultCard>
            <ResultCard>
              <CardTitle>Predicted Subscribers</CardTitle>
              <CardValue>
                {predictions.predicted_subscribers.toFixed(2)}
              </CardValue>
            </ResultCard>
          </ResultsGrid>
        </Results>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
`;

const SlidesContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80%;
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  img {
    max-width: 50%;
    border-radius: 8px;
  }
`;

const TextContent = styled.div`
  max-width: 50%;
`;

const Form = styled.form`
  width: 40%;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: fit-content;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Results = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ResultCard = styled.div`
  width: calc(50% - 20px);
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const CardValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;

export default Ml;