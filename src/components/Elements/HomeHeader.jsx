import React from "react";
import styled from "styled-components";

// Assets
import HeaderImage from "../../assets/img/company/mainLogoOnly.png";
import BackgroundImage from "../../assets/img/company/COVER.png";

import { motion } from "framer-motion";
export default function HomeHeader() {
  return (
    <MainWrapper>
      <Wrapper id="home">
        <LeftSide className="flexCenter">
          <div>
            <h1>
              Abdurauf Sawadjaan
              <br />
              Engineering Consultancy
            </h1>
            <HeaderP>
              <em>
                <span className="orangeColor font18">
                  Where Vision meets Precision
                </span>
                <br /> Experience our innovative approach <br />
                and bring your vision to life with us.
              </em>
            </HeaderP>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img
              src={HeaderImage}
              alt="logo"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
            />
          </ImageWrapper>
        </RightSide>
      </Wrapper>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, white, #aaa);
`;
const Wrapper = styled.section`
  position: relative;
  width: 100%;

  overflow: hidden;
  z-index: 1;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const BGImageHolder = styled.div`
  background-image: linear-gradient(to right, #ff7e5f, #feb47b);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const LeftSide = styled.div`
  width: 60%;
  height: 100%;

  h1 {
    font-weight: 800;
    font-size: 3rem;
  }
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 40%;

  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
  @media (max-width: 560px) {
    padding: 15px 0 50px 0;
    text-align: center;
    align-items: center;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  img {
    padding: 200px 0;
    @media (max-width: 960px) {
      padding: 100px 0;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
    img {
      padding: 130px 0 120px;
    }
  }
`;
const Img = styled(motion.img)`
  width: 90%;
  height: 90%;
  filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 1))
    drop-shadow(-4px -4px 3px rgba(256, 256, 256, 1));
  @media (max-width: 560px) {
    width: 70%;
    height: auto;
  }
`;
