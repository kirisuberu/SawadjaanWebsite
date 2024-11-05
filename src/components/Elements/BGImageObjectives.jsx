import React from "react";
import styled from "styled-components";

export default function BGImage({ title, image, filterColor }) {
  console.log("BGImage component is being rendered");
  return (
    <Wrapper image={image} filterColor={filterColor}>
      {" "}
      {/* filter */}
      <MainContent>
        <Title>{title}</Title>
        <ParagraphHolder>
          <p>
            To complete all projects with honesty and excellence, staying true
            to the trust placed upon us by clients and society.
          </p>
          <p>
            To continually seek knowledge and professional growth, allowing us
            to serve with humility and expertise while fostering a team that
            values learning and integrity.
          </p>
          <p>
            To engage clients and stakeholders with open, transparent
            communication, ensuring that every project is aligned with their
            needs while upholding ethical practices.
          </p>
          <p>
            To maintain our focus on sustainable, community-centered projects
            that reflect our responsibility as stewards of the Earth.
          </p>
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
  //background-image: ${(props) => `url(${props.image})`};
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
  p {
    font-size: 1.1rem;
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
