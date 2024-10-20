import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ServiceCard({ image, title, bullets }) {
  return (
    <Wrapper
    // whileHover={{ scale: 1.05 }}
    //whileTap={{ scale: 0.95 }}
    //transition={{ type: "spring", duration: 0.2 }}
    >
      <TitleHolder>
        <h1>{title}</h1>
      </TitleHolder>
      <BulletContainer>
        {bullets
          ? bullets.map((item, index) => (
              <div style={{ margin: "10px 0" }} key={index}>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </BulletContainer>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  width: 90vw;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: 100%;
  h1 {
    font-size: 2rem;
    margin: 20px 0 0 0;
    font-family: "Poppins", sans-serif;
  }
`;

const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 20px 0;
  p {
    padding: 0 0 0 5rem;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
    &::before {
      content: "•";
      color: #00674f;
      display: inline-block;
      font-size: 2rem;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const TitleHolder = styled.div`
  width: 100vw;
  margin-top: 3rem;
  margin-left: -5rem;
  background-color: #00674f;
  color: white;
  padding: 1rem 0;
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
