import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function PartnerCard({ companyLogo, companyName, cardWidth }) {
  return (
    <Wrapper
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ width: cardWidth }}
    >
      <ImageHolder whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img
          src={companyLogo}
          alt="company logo"
          style={{ width: cardWidth }}
        />
      </ImageHolder>
      <CompanyName>
        <h1>{companyName} </h1>
      </CompanyName>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 300px;
  align-items: center;
  justify-content: center;
`;

const ImageHolder = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CompanyName = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.1rem;
    font-weight: 600;
    color: black;
    text-align: center;
  }
`;
