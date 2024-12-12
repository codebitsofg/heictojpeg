import styled from "styled-components";
import { Zap, Sliders, Repeat } from "lucide-react";

const FeaturesContainer = styled.section`
  padding: 30px 1.5rem;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 36px;
  color: #0070f3;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>
            <Zap />
          </FeatureIcon>
          <FeatureTitle>Easy to use</FeatureTitle>
          <FeatureDescription>
            Our intuitive drag and drop editor makes it easy for you to create
            your forms.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Sliders />
          </FeatureIcon>
          <FeatureTitle>Customize your forms</FeatureTitle>
          <FeatureDescription>
            Uniform makes it easy to customize your forms to fit your company or
            clients branding.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Repeat />
          </FeatureIcon>
          <FeatureTitle>Integrate with your tools</FeatureTitle>
          <FeatureDescription>
            Connect your forms seamlessly to your favorite tools with over 5,000
            integrations available.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;
