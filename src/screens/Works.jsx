import React from "react";
import styled from "styled-components";

import TopNavBar from "../components/Nav/TopNavBar";
import Sidebar from "../components/Nav/Sidebar";

const Works = () => {
  return (
    <Wrapper>
      <TopNavBar />
      <Sidebar />
      <Title>WORKS</Title>
    </Wrapper>
  );
};

export default Works;
const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: black;
`;
