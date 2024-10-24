import React from "react";
import styled from "styled-components";

import TopNavBar from "../components/Nav/TopNavBar";
import Sidebar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import WorksSlider1 from "../components/Elements/WorksSlider1";

const Works = () => {
  return (
    <Wrapper>
      <TopNavBar />
      <Sidebar />
      <Title>
        <h1>WORKS</h1>
      </Title>
      <MainContent>
        <WorksSlider1 />
      </MainContent>
      <Footer />
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

const Title = styled.div`
  font-family: "Oswald", sans-serif;
  letter-spacing: 0.5rem;
  color: #19191a;
  text-align: center;
  margin-top: 3rem;
  padding-top: 3rem;
  font-size: 1.5rem;
  h1 {
    font-weight: 900 !important;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.3rem;
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;
const MainContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
