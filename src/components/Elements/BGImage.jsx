import React from "react";
import styled from "styled-components";

export default function BGImage({ title, image, caption, filterColor }) {
  console.log("BGImage component is being rendered");
  const MultiParagraphProcessor = ({ caption }) => {
    const paragraphs = caption.split("\n"); // split the caption into an array of paragraphs
    return (
      <div>
        {paragraphs.map((paragraph, index) => (
          <p
            style={{
              textIndent: "2rem",
              textAlign: "center",
              fontSize: "1.3rem",
            }}
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  };
  return (
    <Wrapper
      image={image}
      filterColor={filterColor}
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {" "}
      {/* filter */}
      <MainContent>
        <Title className="VMGO-title">{title}</Title>
        <ParagraphHolder>
          <MultiParagraphProcessor caption={caption} />
        </ParagraphHolder>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 48vw;
  margin: 15px 0;
  min-height: 300px;
  position: relative;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.filterColor};
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ParagraphHolder = styled.div`
  margin: 1rem;
  padding-left: 7rem;
  padding-right: 7rem;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const Filter = styled.div``;
const Title = styled.div`
  display: block;
  margin: 10px 0;
  font-family: Helvetica, sans serif;
  font-size: 4rem;
  font-weight: 600;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    margin: 10px 0 0 0;
  }
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
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
  font-size: 1.4rem;
  display: inline;
`;
