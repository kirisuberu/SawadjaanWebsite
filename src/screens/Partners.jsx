import React from "react";
import styled from "styled-components";

import TopNavBar from "../components/Nav/TopNavBar";
import Sidebar from "../components/Nav/Sidebar";
import PartnerCard from "../components/Elements/PartnerCard";
//partner images
import partner1 from "../assets/img/partners/partner1.jpg";
import partner2 from "../assets/img/partners/partner2.jpg";
import partner3 from "../assets/img/partners/partner3.png";
import partner4 from "../assets/img/partners/partner4.png";
import partner5 from "../assets/img/partners/partner5.jpg";
import partner6 from "../assets/img/partners/partner6.jpg";
import partner7 from "../assets/img/partners/partner7.jpg";
import partner8 from "../assets/img/partners/partner8.jpg";
import partner9 from "../assets/img/partners/partner9.jpg";
import partner10 from "../assets/img/partners/partner10.png";
import Footer from "../components/Nav/Footer";

const Partners = () => {
  return (
    <Wrapper>
      <TopNavBar />
      <Sidebar />
      <Title>
        <h1>OUR PARTNERS</h1>
      </Title>
      <CardHolder>
        <PartnerCard
          companyLogo={partner1}
          companyName={"A Hashim Construction"}
          cardWidth={350}
        />
        <PartnerCard
          companyLogo={partner2}
          companyName={"Amara International Institute of Technology, Inc."}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner3}
          companyName={"Edifice Engineering"}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner4}
          companyName={"Hardbloc Development Corporation"}
          cardWidth={250}
        />
        <PartnerCard
          companyLogo={partner5}
          companyName={"Ja Architectural Studio"}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner6}
          companyName={"MH Construction & Enterprises"}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner7}
          companyName={"MMK Construction and Enterprises"}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner8}
          companyName={"S Three Print and Apparel"}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner9}
          companyName={"SHIEHAM CONSTRUCTION AND ENTERPRISES"}
          cardWidth={200}
        />
        <PartnerCard
          companyLogo={partner10}
          companyName={"ZLY CONSTRUCTION"}
          cardWidth={200}
        />
      </CardHolder>
      <Footer />
    </Wrapper>
  );
};

export default Partners;
const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
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
const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
