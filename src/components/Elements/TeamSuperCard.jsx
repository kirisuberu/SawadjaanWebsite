import React from "react";
import styled from "styled-components";
import Team from "./../../screens/Team";
import { motion } from "framer-motion";

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
        <HeaderContainer>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </HeaderContainer>
        <h4>{location}</h4>
        <MultiParagraphProcessor caption={caption} />
      </SuperContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80vw;
  height: 420px;
  display: inline-flex;
  background-color: white;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;
const SuperImage = styled.img`
  margin: 10px;
  width: 400px;
  height: 400px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 0;
  }
`;
const SuperContent = styled.div`
  height: 380px;
  overflow-y: auto;
  margin: 30px;
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    height: 100%;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      text-align: center;
    }
    h3 {
      font-size: 1rem;
      text-align: center;
    }
    h4 {
      font-size: 0.8rem;
      text-align: center;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  padding-bottom: 10px;
`;
