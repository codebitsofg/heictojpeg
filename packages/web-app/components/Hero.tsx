import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  position: relative;
  z-index: 999999;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  margin-top: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0px;
    text-align: left;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;


  @media (min-width: 768px) {
    display: block;
    padding: 0px;
    text-align: left;
    align-items: center;
  }
`;

const Image = styled.img.attrs({
  src: "/hero.svg",
})`
  width: 250px;
  height: 250px;
  margin: 3rem 0;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
    margin: 0;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;

  &:before {
    content: "✓";
    color: #0070f3;
    margin-right: 10px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Your first form in minutes</HeroTitle>
        <HeroDescription>
          Uniform makes it easy for you to create professional forms in minutes
          with an intuitive drag-and-drop editor. No more wasting time on
          tedious form creation.
        </HeroDescription>
        <FeatureList>
          <FeatureItem>Your first form in 5 minutes</FeatureItem>
          <FeatureItem>Easy and intuitive to use</FeatureItem>
          <FeatureItem>Seamless free tier</FeatureItem>
        </FeatureList>
      </HeroContent>
      <Image />
    </HeroContainer>
  );
};

export default Hero;
