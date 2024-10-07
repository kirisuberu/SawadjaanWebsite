import React from "react";
import styled from "styled-components";

export default function ImageLeft({ title, image, imgAlt, caption, bgColor }) {
  console.log("ImageLeft component is being rendered");
  const MultiParagraphProcessor = ({ caption }) => {
    const paragraphs = caption.split("\n"); // split the caption into an array of paragraphs
    return (
      <div style={{ margin: "2rem" }}>
        {paragraphs.map((paragraph, index) => (
          <p style={{ textIndent: "2rem", textAlign: "justify" }} key={index}>
            {paragraph}
          </p>
        ))}
      </div>
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
  font-size: 4rem;
  font-weight: 600;
`;
const MainContent = styled.div`
  display: flex;
`;
const LeftSide = styled.div`
  padding: 2rem;
  width: 40%;
  display: inline;
  min-height: 600px;
`;
const ImageHolder = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
const RightSide = styled.div`
  padding: 2rem;
  width: 60%;
  font-size: 1.3rem;
  display: inline;
`;
