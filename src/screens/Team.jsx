import React from "react";
import styled from "styled-components";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import ContactForm from "../components/Elements/ContactForm";
import TeamCard from "./../components/Elements/TeamCard";
import TeamSuperCard from "./../components/Elements/TeamSuperCard";
//images
import Abdurauf from "./../assets/img/team/AbduraufISawadjaan.png";
import JuneJuneSantos from "./../assets/img/team/JuneJuneSantos.png";
import KarwinHamjani from "./../assets/img/team/KarwinHamjani.png";
import JeraldineJimenez from "./../assets/img/team/JeraldineJimenez.png";
import JerimeJimenez from "./../assets/img/team/JerimeJimenez.png";
import RhenNadzrim from "./../assets/img/team/RhenNadzrim.png";
import EuniceBerina from "./../assets/img/team/EuniceBerina.png";
import JhunJacinto from "./../assets/img/team/JhunJacinto.png";
import HishamEdding from "./../assets/img/team/HishamEdding.png";
import MarkJeremyRaga from "./../assets/img/team/MarkJeremyRaga.png";
import Rhensivar from "./../assets/img/team/RhensivarSappayani.png";
import Footer from "../components/Nav/Footer";
export default function Team() {
  const abduraufcaption = `Abdurauf I. Sawadjaan holds a Master’s Degree in Civil Engineering, specializing in Structural Engineering, from the Polytechnic University of the Philippines in Sta. Mesa, Manila. As a Licensed Master Plumber, Safety Officer 2, and DPWH Accredited Materials Engineer I, he brings a well-rounded set of skills to every project.
With a focus on delivering sustainable, efficient, and structurally sound solutions, Abdurauf ensures that every phase of a project— from concept and design to construction and completion—is managed with precision. Combining advanced design tools and strict adherence to engineering standards, his consultancy provides clients with dependable results that prioritize safety and quality.
Committed to building long-term partnerships, Abdurauf works closely with clients to deliver projects that not only meet expectations but also stand the test of time.
`;

  const junejunecaption = `With over 11 years of continuous experience in structural design and consultancy, he serves as the Program Chair of the Civil Engineering Department at Bulacan State University. He is also a Structural Consultant for various architectural firms across the Philippines and an Associate Member of the Association of Structural Engineers of the Philippines (ASEP).
June-June is highly skilled in using licensed structural design software from MIDAS, ensuring precise analysis and design. He has a strong educational background, holding a master’s degree in civil engineering (Structural) from the University of the Philippines, and he is currently pursuing his Ph.D. in Civil Engineering (Structural) at De La Salle University.
His design philosophy centers on advanced structural analysis, value engineering, and ensuring the safety and economy of all structural aspects. June-June’s commitment to developing and verifying designs according to the latest international codes provides clients with top-tier structural solutions.
`;

  const karwincaption = `Karwin Hamjani brings a unique blend of expertise to the team as both a skilled Structural Engineer and an effective Marketing Lead. With a background in structural engineering, Karwin understands the technical demands of each project, allowing him to bridge the gap between the firm’s engineering services and client needs.
His strong network of industry connections, combined with his strategic marketing insight, makes him well-positioned to drive the firm’s growth. Karwin excels at building relationships, identifying new opportunities, and expanding the firm's reach within the construction and engineering sectors.
By leveraging his engineering knowledge and marketing skills, Karwin ensures that the firm’s innovative and reliable solutions are communicated effectively to clients and partners.
`;
  const jeraldinejimenezcaption = `The dynamic brother-and-sister team of Jerime and Jeraldine Jimenez brings a powerful combination of structural engineering and architectural expertise to Abdurauf Sawadjaan Engineering Consultancy. With Jerime’s deep understanding of structural integrity and Jeraldine’s creative vision, they offer clients seamless collaboration between form and function, ensuring projects are not only structurally sound but also aesthetically remarkable.
Jeraldine, as a talented Architect, brings her passion for design to life through carefully crafted architectural plans that reflect the client’s vision. Her ability to blend practicality with creativity results in spaces that are both functional and visually appealing. Together, Jerime and Jeraldine create harmonious projects that align with client needs while delivering exceptional results in design and engineering.
`;
  const jerimejimenezcaption = `The dynamic brother-and-sister team of Jerime and Jeraldine Jimenez brings a powerful combination of structural engineering and architectural expertise to Abdurauf Sawadjaan Engineering Consultancy. With Jerime’s deep understanding of structural integrity and Jeraldine’s creative vision, they offer clients seamless collaboration between form and function, ensuring projects are not only structurally sound but also aesthetically remarkable.
Jerime, a skilled Structural Engineer, focuses on developing innovative engineering solutions that prioritize safety, efficiency, and sustainability. His technical proficiency and problem-solving skills allow him to approach each project with precision, ensuring that even the most complex structures meet the highest industry standards.
`;
  const rhenzcaption = `He plays a pivotal role in integrating advanced electronic systems into engineering projects. With a solid foundation in electronics and a keen understanding of modern technologies, Rhen is dedicated to enhancing the efficiency and functionality of various infrastructures.
His expertise extends to the design and implementation of electronic systems, ensuring that all projects align with the latest technological advancements and industry standards. Rhen's commitment to quality and innovation ensures that every project benefits from optimal electronic solutions, contributing to the overall success and reliability of the consultancy's offerings.
With a passion for continuous learning and development, Rhen is always seeking ways to improve processes and leverage new technologies, making him an invaluable asset to the team.
`;
  const eunicecaption = `She is a versatile and dedicated Structural Engineer at Abdurauf Sawadjaan Engineering Consultancy. With years of experience in structural design, project coordination, and temporary works, she has built a strong foundation in civil engineering. She focuses on providing design calculations and reports for temporary works and facades, while also coordinating with clients and design consultants.
Beyond her engineering work, Eunice shares her knowledge as a part-time professor at NU–Laguna, teaching subjects like Reinforced Concrete Design and Geotechnical Engineering. Her passion for both education and engineering, combined with her hands-on experience, make her a key contributor to the consultancy’s projects.
`;
  const jhuncaption = `Jhun Jacinto is a talented Structural Engineer at Abdurauf Sawadjaan Engineering Consultancy, bringing valuable insights and expertise to the team. Hailing from Aurora, Baler, Jhun has a strong passion for structural design and engineering, focusing on creating safe and efficient solutions for various construction projects.
With a commitment to excellence, he collaborates closely with other engineers and consultants to ensure that all designs meet rigorous standards and client specifications. Jhun’s ability to analyze complex structural challenges and provide innovative solutions makes him a key asset to the consultancy.
`;
  const hishamcaption = `Hisham Edding is a dedicated Mechanical Engineer known for providing efficient, reliable solutions across a variety of projects. With a focus on designing and optimizing mechanical systems, Hisham ensures every project runs smoothly from start to finish.
His expertise spans HVAC and other mechanical services, always aiming for high performance and energy efficiency. Hisham’s commitment to delivering the best results shines through in every project, ensuring quality and sustainability are at the forefront of his work.
`;
  const markcaption = `Mark Jeremy Raga excels in providing precise geodetic services, including land boundary determination, topographic surveys, and mapping. His expertise ensures that all geospatial data, from property delineation to infrastructure planning, is handled with precision and accuracy.

With a focus on delivering detailed site assessments, cadastral surveys, and geographic information system (GIS) mapping, Mark plays a crucial role in ensuring that projects are built on accurate foundations. His thorough approach to data collection and analysis helps guide the development process, ensuring smooth project execution from start to finish.

`;
  const rhensivarcaption = `He has worked on a variety of projects across different provinces in the Mindanao region, demonstrating a strong ability to adapt to diverse environments and challenges. Rhensivar’s expertise encompasses the design, implementation, and maintenance of electronic systems, ensuring they meet the highest industry standards.
He focuses on delivering efficient and reliable solutions that enhance the functionality of engineering projects. His practical experience and technical knowledge make him an asset in the engineering community, contributing to the success of every initiative he undertakes.
As he continues to explore new opportunities in the field, Rhensivar remains committed to advancing his skills and contributing to the engineering landscape in Mindanao and the entire Philippines.
`;
  return (
    <Wrapper id="team">
      <TopNavBar />
      <SideBar />
      <MainContent>
        <Title>
          <h1>OUR TEAM</h1>
        </Title>
        <SuperTeam>
          <LineDiv />
          <TeamSuperCard
            image={Abdurauf}
            title="Engr. Abdurauf Sawadjaan"
            subtitle="Managing Director & Founder"
            caption={abduraufcaption}
          />
          <LineDiv />
          <TeamSuperCard
            image={JuneJuneSantos}
            title="Engr. June-June P. Santos"
            subtitle="Principal Structural Engineer"
            location="Pulilan, Bulacan"
            caption={junejunecaption}
          />
          <LineDiv />
          <TeamSuperCard
            image={KarwinHamjani}
            title="Engr. Karwin Hamjani"
            subtitle="Marketing Lead & Structural Engineer"
            location="Zamboanga City"
            caption={karwincaption}
          />
          <LineDiv />
        </SuperTeam>
        <CardHolder>
          <TeamCard
            image={JeraldineJimenez}
            title="Archi. Jeraldine Jimenez"
            subtitle="Architect"
            location="Malolos, Bulacan"
            caption={jeraldinejimenezcaption}
          />
          <TeamCard
            image={JerimeJimenez}
            title="Engr. Jerime Jimenez"
            subtitle="Structural Engineer"
            location="Malolos, Bulacan"
            caption={jerimejimenezcaption}
          />
          <TeamCard
            image={RhenNadzrim}
            title="Engr. Rhen Nadzrim Sappayani"
            location="Jolo, Sulu"
            subtitle="Electronics Engineer"
            caption={rhenzcaption}
          />
          <TeamCard
            image={EuniceBerina}
            title="Engr. Eunice Berina"
            location="Calamba, Laguna"
            subtitle="Structural Engineer"
            caption={eunicecaption}
          />
          <TeamCard
            image={JhunJacinto}
            title="Engr. Jhun Jacinto"
            location="Baler, Aurora"
            subtitle="Structural Engineer"
            caption={jhuncaption}
          />
          <TeamCard
            image={HishamEdding}
            title="Engr. Hisham Edding"
            location="Sibuco"
            subtitle="Mechanical Engineer"
            caption={hishamcaption}
          />
          <TeamCard
            image={MarkJeremyRaga}
            title="Engr. Mark Jeremy Raga"
            location="Zamboanga City"
            subtitle="Geodetic Engineer"
            caption={markcaption}
          />
          <TeamCard
            image={Rhensivar}
            title="Engr. Rhensivar Sappayani"
            location="Jolo, Sulu"
            subtitle="Electronics Engineer"
            caption={rhensivarcaption}
          />
        </CardHolder>
      </MainContent>
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
const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;
const SuperTeam = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LineDiv = styled.div`
  height: 3px;
  width: 100vw;
  background-color: #19191a;
  margin: 20px 0;
`;

const MainContent = styled.div`
  margin: 0 10vw;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
