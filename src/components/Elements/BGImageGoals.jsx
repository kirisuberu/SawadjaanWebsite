import React from "react";
import styled from "styled-components";

export default function BGImageGoals({ title, image, filterColor }) {
  console.log("BGImage component is being rendered");

  return (
    <Wrapper
      image={image}
      filterColor={filterColor}
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {" "}
      {/* filter */}
      <MainContent>
        <Title>{title}</Title>
        <ParagraphHolder>
          <p>
            <span>Value-driven Innovation:</span>To integrate innovative
            engineering solutions while remaining true to our core values of
            humility, responsibility, and integrity.
          </p>
          <p>
            <span>Sustainability in Service:</span>To ensure every project
            reflects our commitment to sustainability, balancing human needs
            with the preservation of the environment.
          </p>
          <p>
            <span>Client-Centered Excellence:</span> To consistently meet and
            exceed the expectations of our clients, providing reliable,
            efficient, and quality service.
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

  p {
    font-size: 1.4rem;
    span {
      font-weight: 800;
      color: #00674f;
    }
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
