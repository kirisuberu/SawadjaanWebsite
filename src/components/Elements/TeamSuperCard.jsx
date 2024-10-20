import React from "react";
import styled from "styled-components";
import Team from "./../../screens/Team";

export default function TeamSuperCard({
  image,
  title,
  subtitle,
  location,
  caption,
}) {
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
    <Wrapper>
      <SuperImage src={image} />
      <SuperContent>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{location}</h4>
        <MultiParagraphProcessor caption={caption} />
      </SuperContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 520px;
  display: inline-flex;
  background-color: aliceblue;
  font-family: "Poppins", sans-serif;
`;
const SuperImage = styled.img`
  margin: 10px;
  width: 500px;
  height: 500px;
  object-fit: cover;
`;
const SuperContent = styled.div`
  height: 480px;
  overflow-y: scroll;
  margin: 30px;
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.2rem;
  }
`;
