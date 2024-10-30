import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TopNavBar from "../components/Nav/TopNavBar";
import Sidebar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import WorksSlider1 from "../components/Elements/WorksSlider1";
import WorksSlider2 from "../components/Elements/WorksSlider2";
import WorksSlider3 from "../components/Elements/WorksSlider3";
import WorksSlider4 from "../components/Elements/WorksSlider4";
import WorksSlider5 from "../components/Elements/WorksSlider5";
const Works = () => {
  return (
    <>
      <Wrapper>
        <TopNavBar />
        <Sidebar />
        <Title>
          <h1>WORKS</h1>
        </Title>
        <MainContent>
          <ContentTitle whileHover={{ letterSpacing: "3px" }}>
            <h1>Design Projects</h1>
          </ContentTitle>
          <WorksSlider1 />
          <ContentTitle whileHover={{ letterSpacing: "3px" }}>
            <h1>
              Design Projects <span>by Arch. Jeraldine Jimenez</span>
            </h1>
          </ContentTitle>
          <WorksSlider2 />
          <ContentTitle whileHover={{ letterSpacing: "3px" }}>
            <h1>Structural Projects</h1>
          </ContentTitle>
          <WorksSlider3 />
          <ContentTitle whileHover={{ letterSpacing: "3px" }}>
            <h1>Geodetic Services</h1>
          </ContentTitle>
          <WorksSlider4 />
          <ContentTitle whileHover={{ letterSpacing: "3px" }}>
            <h1>Electronic Services</h1>
          </ContentTitle>
          <WorksSlider5 />
        </MainContent>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Works;
const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Title = styled(motion.div)`
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
    margin-top: 60px;
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
    display: flex;
  }
`;
const ContentTitle = styled(motion.div)`
  width: 100%;
  margin: 1rem 0;
  margin-top: 5rem;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: #19191a;
  text-align: left;
  justify-content: center;
  padding: 1rem;
  padding-top: 1.5rem;
  font-size: 0.7rem;
  h1 {
    font-weight: 500 !important;
  }
  span {
    font-weight: 400 !important;
    font-size: 1.5rem;
    color: #bbb;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
    padding: 1rem;
    margin: 1rem 0;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
