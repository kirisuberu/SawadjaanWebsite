import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../../scss/teamcard.scss";
const TeamCard = ({ image, title, subtitle, location, caption }) => {
  const [showFullCard, setShowFullCard] = useState(false);

  const handleCardClick = () => {
    setShowFullCard(true);
  };
  const handleCardClose = () => {
    setShowFullCard(false);
  };
  const handleCardMouseLeave = () => {
    setShowFullCard(false);
  };
  const animations = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };
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
      className={`card ${showFullCard ? "full-card" : ""}`}
      onMouseLeave={handleCardMouseLeave}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
    >
      <ImageHolder>
        <img
          src={image}
          alt={title}
          style={{
            width: showFullCard ? "500px" : "300px",
            height: showFullCard ? "500px" : "300px",
          }}
        />
      </ImageHolder>
      {showFullCard ? (
        <FullCardHolder>
          <FullCard className="text-container">
            <h2>{title}</h2>
            <p id="subtitle">{subtitle}</p>
            <h3 style={{ marginBottom: "2rem" }}>{location}</h3>
            <MultiParagraphProcessor caption={caption} />
            <TeamClose onClick={() => handleCardClose()}>Close</TeamClose>
          </FullCard>
        </FullCardHolder>
      ) : (
        <div className="card-content">
          <h2 style={{ marginTop: 0 }}>{title}</h2>
          <p style={{ fontSize: "1.2rem" }}>{subtitle}</p>
          <SeeMore onClick={handleCardClick}>See More</SeeMore>
        </div>
      )}
    </Wrapper>
  );
};

export default TeamCard;

const Wrapper = styled(motion.div)`
  margin: 1rem;

  border-radius: 1rem;
  contain: layout;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  h2 {
    text-align: center;
    font-size: 1.3rem;
    margin: 0.5rem 0 0.3rem;
    font-weight: 700;
  }

  p {
    text-align: center;
    font-size: 0.9rem;
    margin: 0.3rem 0 1rem;
  }
`;

const ImageHolder = styled.div`
  img {
    width: 300px;
    height: 300px;
    border-radius: 1rem;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    img {
    }
  }
`;

const TeamClose = styled.button`
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
  font-size: 0.7rem;
  color: #ffffff;
  border: none;

  cursor: pointer;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  &:hover {
    background-color: #19191a;
  }
`;
const FullCardHolder = styled.div`
  position: absolute;
  padding: 1rem;
  right: 0;
  top: 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const FullCard = styled.div`
  width: calc(100vw - 700px);
  height: 500px;
  margin-top: 30px;
  margin-right: 40px;
  display: flex;
  scroll-behavior: smooth;
  overflow-y: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(
    0,
    0,
    0,
    0.9
  ); /* Semi-transparent emerald background */
  color: white;
  padding: 5rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  h2 {
    font-size: 1.7rem;
    margin: 0.25rem 0;
    font-weight: 700;
    position: sticky;
  }
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    position: sticky;
  }
  h3 {
    text-align: center;
    font-size: 1rem;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    margin: 0;
    padding: 0;

    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.8rem;
    }
  }
`;

const SeeMore = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.6rem;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 1rem;
  width: 80px;
  &:hover {
    background-color: #19191a;
  }
`;
