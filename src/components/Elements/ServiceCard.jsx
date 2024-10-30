import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ServiceCard({ image, title, bullets }) {
  // Variants for parent and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time between each child animation start
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const bulletVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Wrapper
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <TitleHolder
        variants={itemVariants}
        whileHover={{ letterSpacing: "3px" }}
      >
        <h1>{title}</h1>
      </TitleHolder>
      <BulletContainer>
        {bullets
          ? bullets.map((item, index) => (
              <motion.div
                style={{ margin: "0" }}
                key={index}
                variants={bulletVariants}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="font20 extraBold">{item.name}</p>
              </motion.div>
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

const BulletContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  p {
    padding: 0 0 0 5rem;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    &::before {
      content: "•";
      color: #19191a;
      display: inline-block;
      font-size: 2rem;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const TitleHolder = styled(motion.div)`
  width: 100vw;
  margin-top: 3rem;
  margin-left: -5rem;
  background-color: #19191a;
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
