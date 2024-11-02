import React from "react";
import styled from "styled-components";

export default function ImageLeft({ title, image, imgAlt, caption, bgColor }) {
  console.log("ImageLeft component is being rendered");
  const MultiParagraphProcessor = ({ caption }) => {
    const paragraphs = caption.split("\n"); // split the caption into an array of paragraphs
    return (
      <ParagraphProcessor style={{ padding: "2rem" }}>
        {paragraphs.map((paragraph, index) => (
          <p style={{ textIndent: "2rem", textAlign: "justify" }} key={index}>
            {paragraph}
          </p>
        ))}
      </ParagraphProcessor>
    );
  };
  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <MainContent>
        <LeftSide
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></LeftSide>
        <RightSide>
          <Title>{title}</Title>
          <MultiParagraphProcessor caption={caption} />
        </RightSide>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  margin: 15px 0;
  background-color: #fff;
`;
const Title = styled.div`
  display: block;
  margin: 10px 2rem;
  font-family: Helvetica, sans serif;
  font-size: 3.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  padding: 2rem;
  width: 45%;
  display: inline;
  min-height: 600px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;

    min-height: 300px;
    padding: 1rem;
  }
`;
const ImageHolder = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
const RightSide = styled.div`
  padding: 2rem;
  width: 60%;

  display: inline;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;
const ParagraphProcessor = styled.div`
  p {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
