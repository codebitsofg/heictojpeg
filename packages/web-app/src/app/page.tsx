"use client";
import { useState, ChangeEvent, useRef } from "react";
import axios, { AxiosResponse } from "axios";

import {
  AddButton,
  AddContainer,
  BrandLogo,
  Container,
  ConverText,
  ConvertButton,
  ConvertedFile,
  FileInput,
  FlexContainer,
  FloatingWrap,
  FrameImage,
  InnerWrapper,
  Paragraph,
  SelectedFileContainer,
  Spinner,
  SpinnerContainer,
  SuccessContainer,
  TextContainer,
  Title,
} from "./appStyles";
import { json } from "stream/consumers";

function Home() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setConvertedFile(null);
      event.target.value = "";
      setErrorMessage("");
    }
  };

  const handleDownload = () => {
    setSelectedFile(undefined);
    setConvertedFile(null);
    setIsLoading(false);
  };

  const handleConvert = async () => {
    if (isLoading) return;
    if (!selectedFile) {
      setErrorMessage("Please select a file.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response: AxiosResponse<Blob> = await axios.post(
        "https://multerapiconvert-2x2av6p2ra-ew.a.run.app/", // Hide
        formData,
        {
          responseType: "blob",
        }
      );

      setIsLoading(false);

      if (response.status === 200) {
        setConvertedFile(response.data);
        setSelectedFile(undefined);
      } else {
        setErrorMessage("Conversion failed. Please try again later.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Container>
        <FloatingWrap>
          <InnerWrapper>
            {selectedFile !== undefined && !isLoading && (
              <SelectedFileContainer>
                <Paragraph> {selectedFile.name} </Paragraph>
                <Paragraph>
                  {(selectedFile.size / 1000000).toFixed(2)} mb
                </Paragraph>
              </SelectedFileContainer>
            )}
            <FileInput ref={inputRef} onChange={handleFileChange} />

            {!selectedFile && !convertedFile && (
              <AddContainer>
                <AddButton onClick={() => inputRef.current?.click()}>
                  +
                </AddButton>
                <Paragraph>Select your files</Paragraph>
              </AddContainer>
            )}

            {isLoading && (
              <SpinnerContainer>
                <Spinner />
                <Paragraph>Almost There!</Paragraph>
              </SpinnerContainer>
            )}

            {convertedFile && (
              <SuccessContainer>
                <Title>🎉</Title>
                <Paragraph>Your file is ready!</Paragraph>
              </SuccessContainer>
            )}

            <ConvertButton onClick={handleConvert}>
              <ConverText inactive={isLoading}>
                {!selectedFile ? (
                  convertedFile ? (
                    <a
                      href={URL.createObjectURL(convertedFile)}
                      download="converted.jpeg"
                      onClick={handleDownload}
                      className="download-link"
                    >
                      Download File
                    </a>
                  ) : (
                    "Select File"
                  )
                ) : (
                  "Convert File"
                )}
              </ConverText>
            </ConvertButton>
          </InnerWrapper>
        </FloatingWrap>

        <TextContainer>
          <Title>Stop looking for an alternative</Title>
          <Paragraph>
            You can easily convert your HEIC formatted media with this super
            fast, reliable converter tool.
          </Paragraph>
        </TextContainer>

        <FrameImage />

        <BrandLogo>ConvertIT</BrandLogo>
      </Container>
    </>
  );
}

export default Home;
