import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import whiteLogo from "../../assets/img/company/whiteTransparent.png";

const Footer = () => {
  return (
    <Wrapper>
      <LogoHolder>
        <img src={whiteLogo} alt="" />
      </LogoHolder>
      <ContactInfo>Contact Information</ContactInfo>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  display: inline-flex;
  width: 100vw;
  height: 100px;
  background-color: #050708;
`;

const LogoHolder = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  width: 10%;
  img {
    height: 80px;
  }
`;

const ContactInfo = styled.div`
  width: 90%;
`;
