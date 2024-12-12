import styled from "styled-components";

const IntegrationContainer = styled.section`
  padding: 30px 1.5rem;
  text-align: center;
  max-width: 65rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

export const OuterWrapper = styled.div`
  background-color: black;
`;
const IntegrationTitle = styled.h2`
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
`;

const IntegrationDescription = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: 40px;
`;

const IntegrationGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;

  @media (min-width: 768px) {
    gap: 30px;
    flex-wrap: nowrap;
  }
`;

const IntegrationLogo = styled.div<{ fontFamily: string; color: string }>`
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
`;

const integrations = [
  { name: "Zapnex", fontFamily: "Arial, sans-serif", color: "#E63946" },
  { name: "SalesPro", fontFamily: "Georgia, serif", color: "#457B9D" },
  { name: "Googolix", fontFamily: "Tahoma, sans-serif", color: "#2A9D8F" },
  {
    name: "Slackify",
    fontFamily: '"Courier New", monospace',
    color: "#E9C46A",
  },
  {
    name: "Trellify",
    fontFamily: '"Times New Roman", serif',
    color: "#F4A261",
  },
  { name: "Asanify", fontFamily: "Verdana, sans-serif", color: "#264653" },
];

export default function Integration() {
  return (
    <OuterWrapper>
      <IntegrationContainer id="integrations">
        <IntegrationTitle>
          Integrate & connect with your favorite tools
        </IntegrationTitle>
        <IntegrationDescription>
          Uniform makes it easy to connect your forms seamlessly to your
          favorite tools. We support integrations with Zapier and over 5,000
          other apps.
        </IntegrationDescription>
        <IntegrationGrid>
          {integrations.map((integration) => (
            <IntegrationLogo
              key={integration.name}
              fontFamily={integration.fontFamily}
              color={integration.color}
            >
              {integration.name}
            </IntegrationLogo>
          ))}
        </IntegrationGrid>
      </IntegrationContainer>
    </OuterWrapper>
  );
}
