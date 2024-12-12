import styled from "styled-components";

const SaveTimeContainer = styled.section`
  padding: 30px 1.5rem;
  text-align: center;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

const SaveTimeTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 30px;
  border-radius: 8px;
  padding: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 6px;
`;

const StatValue = styled.h3`
  font-size: 36px;
  color: #0070f3;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 18px;
  color: #666;
`;

const SaveTime = () => {
  return (
    <SaveTimeContainer>
      <SaveTimeTitle>
        Save development time, focus on your business
      </SaveTimeTitle>
      <StatsGrid>
        <StatCard>
          <StatValue>Hours to days</StatValue>
          <StatLabel>Average time saved</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>More than 10+</StatValue>
          <StatLabel>Templates ready to be imported</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>Up to 5k</StatValue>
          <StatLabel>Integrations available</StatLabel>
        </StatCard>
      </StatsGrid>
    </SaveTimeContainer>
  );
};

export default SaveTime;
