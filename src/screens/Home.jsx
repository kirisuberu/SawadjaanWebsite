import React, { useEffect } from "react";
import styled from "styled-components";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import HomeHeader from "../components/Elements/HomeHeader";
import Footer from "../components/Nav/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="contact">
      <TopNavBar />
      <SideBar />
      <HomeHeader />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
`;
const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: black;
  text-align: center;
  margin-top: 3rem;
  font-size: 4rem;
`;
