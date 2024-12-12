import styled from "styled-components";
import Image from "next/image";

const TemplatesContainer = styled.section`
  padding: 30px 1.5rem;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

const TemplatesTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const TemplatesDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const TemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 50px;

  @media (min-width: 768px) {
    gap: 80px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

const TemplateCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    min-height: 20rem;
  }
`;

const TemplateImage = styled.img`
  width: 150px;
  height: auto;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const TemplateInfo = styled.div`
  padding: 20px;
  margin-top: auto;
`;

const TemplateTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const TemplateDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const templates = [
  {
    name: "Contact Form",
    image: "/contact.svg",
    description: "A simple contact form for your website",
  },
  {
    name: "Survey",
    image: "/survey.svg",
    description: "Gather feedback from your customers",
  },
  {
    name: "Event Registration",
    image: "/register.svg",
    description: "Sign up attendees for your next event",
  },
];

export default function Templates() {
  return (
    <TemplatesContainer id="templates">
      <TemplatesTitle>
        Pick from our library of pre-built templates
      </TemplatesTitle>
      <TemplatesDescription>
        To make it even easier for you to create your forms, we have created a
        library of pre-built templates. You can easily customize these to fit
        your needs.
      </TemplatesDescription>
      <TemplatesGrid>
        {templates.map((template) => (
          <TemplateCard key={template.name}>
            <TemplateImage
              src={template.image}
              alt={template.name}
            />
            <TemplateInfo>
              <TemplateTitle>{template.name}</TemplateTitle>
              <TemplateDescription>{template.description}</TemplateDescription>
            </TemplateInfo>
          </TemplateCard>
        ))}
      </TemplatesGrid>
    </TemplatesContainer>
  );
}
