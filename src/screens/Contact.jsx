import React from "react";
import styled from "styled-components";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import ContactForm from "../components/Elements/ContactForm";
export default function Contact() {
  return (
    <Wrapper id="contact">
      <Title>CONTACT US</Title>
      <TopNavBar />
      <SideBar />
      <ContactForm />
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
