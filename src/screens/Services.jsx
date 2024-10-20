import React from "react";
import styled from "styled-components";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import ContactForm from "../components/Elements/ContactForm";
import ServiceCard from "../components/Elements/ServiceCard";
import imageBG from "../assets/img/company/COVER.png";
export default function Services() {
  return (
    <Wrapper id="services">
      <TopNavBar />
      <SideBar />
      <MainContent>
        <Title>OUR SERVICES</Title>
        <ServiceIntro>
          <h2>
            At Abdurauf Sawadjaan Engineering Consultancy, we offer a
            comprehensive range of services that span various engineering and
            design disciplines. Here’s how our team can elevate your projects:
          </h2>
        </ServiceIntro>
        <ServiceCard
          image={imageBG}
          title="1. Structural and Civil Engineering Services"
          bullets={[
            {
              name: "Design and analysis of residential, commercial, and industrial structures",
            },
            {
              name: "Development of infrastructure projects, including roads, bridges, and drainage systems",
            },
            {
              name: "Structural assessment and rehabilitation of existing structures",
            },
            { name: "Preparation of structural reports and documentation" },
            { name: "Project management and construction oversight" },
          ]}
        />
        <ServiceCard
          image={imageBG}
          title="2. Architectural Services"
          bullets={[
            {
              name: "Architectural design and planning for residential and commercial projects",
            },
            {
              name: "Preparation of detailed architectural plans and specifications",
            },
            {
              name: "Interior design and space planning",
            },
            { name: "Landscape architecture and site development" },
          ]}
        />
        <ServiceCard
          image={imageBG}
          title="3. Electronics Engineering Services"
          bullets={[
            {
              name: "Electrical systems design for buildings (lighting, power distribution, etc.)",
            },
            {
              name: "Solar panel design and installation for residential and commercial projects, including system optimization and integration with existing electrical infrastructure",
            },
            {
              name: "Telecommunications infrastructure design and installation",
            },
            { name: "Fire alarm and detection systems" },
            { name: "Building automation systems (smart buildings)" },
            {
              name: "Low-voltage systems design (CCTV, security systems, data networks)",
            },
            { name: "Electrical inspections and compliance checks" },
          ]}
        />
        <ServiceCard
          image={imageBG}
          title="4. Mechanical Engineering Services"
          bullets={[
            {
              name: "HVAC (Heating, Ventilation, and Air Conditioning) system design",
            },
            {
              name: "Plumbing system design and installation",
            },
            {
              name: "Mechanical systems analysis and optimization",
            },
            { name: "Energy efficiency assessments" },
            { name: "Equipment selection and specifications" },
          ]}
        />
        <ServiceCard
          image={imageBG}
          title="5. Geodetic Engineering Services"
          bullets={[
            {
              name: "Land surveying for residential, commercial, and industrial projects",
            },
            {
              name: "Topographic and boundary surveys",
            },
            {
              name: "Geospatial data analysis and mapping",
            },
            { name: "Construction staking and monitoring" },
            { name: "Geographic Information System (GIS) services" },
          ]}
        />
        <ServiceBottom>
          <h2>Integrated Services:</h2>
          <p>
            <span>Project Management:</span> Full-cycle project management from
            design to construction
          </p>
          <p>
            <span>Permitting and Documentation:</span> Handling of building
            permits, regulatory compliance, and necessary documentation for all
            projects
          </p>
          <p>
            <span>Design-Build Solutions: </span> Comprehensive design and
            construction services for clients looking for streamlined,
            single-source project delivery
          </p>
        </ServiceBottom>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
`;
const Title = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: #19191a;
  text-align: center;
  margin-top: 3rem;
  padding-top: 3rem;
  font-size: 4rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 0.3rem;
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;
const MainContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;
const ServiceIntro = styled.div`
  width: 100vw;

  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #19191a;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    line-height: 1.5;
    text-align: left;
    justify-content: left;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;
const ServiceBottom = styled.div`
  width: 100vw;
  padding: 3rem;
  display: block;
  background-color: #19191a;
  justify-content: left;
  align-items: left;
  h2 {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    text-align: left;
    justify-content: left;
  }
  p {
    padding: 0 0 0 5rem;
    margin: 0;
    color: #aaa;
    font-size: 1.5rem;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
    &::before {
      content: "•";
      color: white;
      display: inline-block;
      font-size: 2rem;
      width: 1em;
      margin-left: -1em;
    }
    span {
      color: #fff;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      padding: 0 0 0 3rem;
      font-size: 1.2rem;
    }
  }
`;
