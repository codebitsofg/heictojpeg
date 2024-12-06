import styled from "styled-components";
import { Clock, Zap, Sliders } from "lucide-react";

const BenefitsContainer = styled.section`
  padding: 80px 0;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BenefitIcon = styled.div`
  font-size: 48px;
  color: #0070f3;
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Benefits = () => {
  return (
    <BenefitsContainer>
      <BenefitsGrid>
        <BenefitCard>
          <BenefitIcon>
            <Clock />
          </BenefitIcon>
          <BenefitTitle>Save time & money</BenefitTitle>
          <BenefitDescription>
            Stop spending time & money on the back-and-forth. Focus on what
            matters.
          </BenefitDescription>
        </BenefitCard>
        <BenefitCard>
          <BenefitIcon>
            <Zap />
          </BenefitIcon>
          <BenefitTitle>High Delivery</BenefitTitle>
          <BenefitDescription>
            Thanks to our scalable infrastructure, we guarantee an high
            deliverability and uptime.
          </BenefitDescription>
        </BenefitCard>
        <BenefitCard>
          <BenefitIcon>
            <Sliders />
          </BenefitIcon>
          <BenefitTitle>Get rid of bias & spam</BenefitTitle>
          <BenefitDescription>
            With the automatic ReCaptcha integration in our forms, you can get
            rid of bias & spam.
          </BenefitDescription>
        </BenefitCard>
      </BenefitsGrid>
    </BenefitsContainer>
  );
};

export default Benefits;
