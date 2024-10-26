import React from "react";
import styled from "styled-components";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import ContactForm from "../components/Elements/ContactForm";
import Footer from "../components/Nav/Footer";
export default function Contact() {
  return (
    <Wrapper id="contact">
      <Title>
        <h1>CONTACT US</h1>
      </Title>
      <TopNavBar />
      <SideBar />
      <ContactForm />
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
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;
