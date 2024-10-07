import React from "react";
import styled from "styled-components";

export default function ImageRight({ title, image, imgAlt, caption, bgColor }) {
  console.log("ImageRight component is being rendered");
  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <MainContent>
        <RightSide>
          <Title>{title}</Title>
          <p>{caption}</p>
        </RightSide>
        <LeftSide
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></LeftSide>
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
  margin: 10px 0;
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
  font-size: 1.4rem;
  display: inline;
`;
