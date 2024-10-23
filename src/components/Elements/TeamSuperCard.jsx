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
    <Wrapper
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", duration: 0.2 }}
      viewport={{ once: true }}
    >
      <SuperImage src={image} />
      <SuperContent>
        <HeaderContainer>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <h4>{location}</h4>
        </HeaderContainer>

        <MultiParagraphProcessor caption={caption} />
      </SuperContent>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  width: 85vw;
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
  margin-bottom: 10px;
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 0.8rem;
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
      font-size: 0.7rem;
    }
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
`;
