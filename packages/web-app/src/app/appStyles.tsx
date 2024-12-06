import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  font-family: var(--font-Oswald);
  justify-content: space-between;
  align-items: center;
  color: black;
  background-size: cover;
  background-position: center center;
  gap: 3%;
`;

export const FloatingWrap = styled.div`
  border-radius: 12px;
  height: 25rem;
  width: 30rem;
  background-color: #f1f1f1;
  box-shadow: 1px 0 10px #24232346;

  @media screen and (max-width: 1000px) {
    width: 90vw;
    z-index: 99;
  }
`;

export const Wrapper = styled.div`
  padding-top: 4rem;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3%;
  margin-top: 9%;

  p {
    margin-top: 4%;
    font-size: 1.5rem;
    width: 40%;
    font-weight: 200;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 45px;
  height: 45px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5268ff;
  }
`;

export const ConvertButton = styled.div`
  border-top: 1px solid gainsboro;
  width: 100%;
  cursor: pointer;
  margin-top: auto;
  padding: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConverText = styled.span<{ inactive: boolean }>`
  background-color: ${({ inactive }) => (inactive ? "gray" : "black")};
  padding: 3% 9%;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 200;
  color: #f1f1f1;

  &:hover {
    background-color: #5268ff;
  }
`;

export const TextContainer = styled.div`
  height: 47%;
  text-align: right;
  padding: 6% 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.3rem;
  color: #191919;
  flex: 1;
  margin-bottom: 3%;
  font-family: var(--font-Archivo);
`;

export const Paragraph = styled.p`
  width: 45%;
  font-size: 1.2rem;
  font-weight: 200;
  text-align: right;
`;

export const FrameImage = styled.img.attrs({
  src: "/frame.png",
})`
  position: absolute;
  right: 10%;
  top: 50%;
  width: 50%;
  rotate: 30deg;
  z-index: 0;
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  padding: 0;
  margin: 0 auto;
  color: #fffaff;
  display: none;
  &::file-selector-button {
    display: flex;
    display: none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const ConvertedFile = styled(FlexContainer)`
  width: 50%;
  color: black;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 18vh;
  height: 18vh;
  margin-bottom: 3vh;
  border-radius: 50%;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  animation: ${spin} 1s linear infinite;
`;

export const BrandLogo = styled.h4`
  font-size: 2rem;
  top: 1%;
  color: #3c3744;
  left: 2%;
  font-family: var(--font-Archivo);
`;

export const SelectedFileContainer = styled.div`
  border-bottom: 1px solid gainsboro;
  width: 100%;
  text-align: left;
  padding: 3% 6%;
  p {
    font-size: 0.9rem;
    text-align: left;
    font-weight: 200;
  }

  :first-child {
    font-weight: 300;
  }
`;

export const SpinnerContainer = styled.div`
  padding-top: 9%;
`;

export const SuccessContainer = styled.div`
  padding-top: 9%;
  margin: auto 0;

  :first-child {
    margin-bottom: 15%;
    font-size: 4rem;
  }
`;
