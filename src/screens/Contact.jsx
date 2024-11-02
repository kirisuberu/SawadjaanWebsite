import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import ContactForm from "../components/Elements/ContactForm";
import Footer from "../components/Nav/Footer";
import MapBulacan from "../components/Elements/MapBulacan";
import MapZC from "../components/Elements/MapZC";
export default function Contact() {
  return (
    <Wrapper id="contact">
      <Title>
        <h1>CONTACT US</h1>
      </Title>
      <TopNavBar />
      <SideBar />
      <ContactForm />
      <Offices>
        <TitleHolder whileHover={{ letterSpacing: "3px" }}>
          <h1>OFFICES</h1>
        </TitleHolder>
        <Maps>
          <MapZC />
          <MapBulacan />
        </Maps>
      </Offices>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
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
    margin-top: 60px;
    padding-top: 1rem;
  }
`;

const Offices = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const Maps = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: space-evenly;
    justify-content: space-evenly;
    align-content: space-evenly;
  }
`;
const TitleHolder = styled(motion.div)`
  width: 100vw;
  margin-top: 3rem;
  margin-left: -5rem;
  display: flex;
  background-color: #19191a;
  color: white;
  padding: 1rem 0;
  margin-bottom: 2rem;
  h1 {
    padding: 0 0 0 5rem;
    margin: 0;
    font-size: 2rem;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-left: -1.3rem;
    h1 {
      padding: 1rem 1rem 1rem 2rem;
      font-size: 1.5rem;
    }
  }
`;
