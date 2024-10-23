import styled from "styled-components";

import TopNavBar from "../Nav/TopNavBar";
import Sidebar from "../Nav/Sidebar";
import ImageLeft from "../Elements/ImageLeft";
import ImageRight from "../Elements/ImageRight";
import BGImage from "../Elements/BGImage";
import BGImageGoals from "../Elements/BGImageGoals";
import BGImageObjectives from "../Elements/BGImageObjectives";
//assets
import HomeBG from "../../assets/img/sampleBG.jpg";
import ImageSlider from "../Elements/ImageSlider";
import Footer from "../Nav/Footer";
export default function About() {
  const StoryContent = `Abdurauf Sawadjaan Engineering Consultancy was founded with a clear purpose: to contribute to the betterment of communities through thoughtful, resilient, and enduring infrastructure. Our founder, Abdurauf I. Sawadjaan, has always believed in the importance of stewardship and responsibility toward the environment. This guiding principle instilled in him the desire to build—both physically and socially—for the benefit of all, shaping his path toward becoming a civil engineer.
After earning his Bachelor of Science in Civil Engineering from Western Mindanao State University, Abdurauf’s thirst for knowledge led him to pursue a master’s degree at the prestigious Polytechnic University of the Philippines. During this journey, he was greatly influenced by Engr. June-June Santos, a mentor and expert in structural engineering who became a source of inspiration and a partner in the industry.
Although Abdurauf ventured into various businesses, his heart remained in structural engineering. His passion for the field, combined with the guidance and mentorship of Engr. Santos, brought him back to the profession where he truly felt at home. With a vision to create a lasting legacy, he focused on building structures that reflect technical excellence and a commitment to serving communities.
Starting his own consultancy was not without challenges. Limited capital posed a significant hurdle, but Abdurauf recognized that real wealth lies in the knowledge, experience, and skills he had acquired over the years. With that understanding, he founded Abdurauf Sawadjaan Engineering Consultancy, a company built on perseverance and a commitment to quality.
As we continue to grow, our company remains grounded in humility and service. Every project we undertake is guided by our belief that engineering is an opportunity to contribute positively to society and leave behind a legacy that benefits everyone for generations to come.
`;

  const VisionContent = `To be a beacon of excellence in engineering consultancy, building structures that serve communities with integrity, humility, and sustainability, while guided by strong moral values and a deep sense of responsibility.`;

  const MissionContent = `Our mission is to design and deliver engineering solutions that honor the values of stewardship and responsibility toward creation. We strive to create meaningful infrastructure that benefits both present and future generations, with a focus on quality, innovation, and service, all grounded in humility and dedication to the communities we serve.`;
  return (
    <Wrapper>
      <TopNavBar />
      <Sidebar />
      <HomeContent>
        <MainContent>
          <Title>
            <h1>ABOUT US</h1>
          </Title>
          <ImageSlider />
          <ImageLeft
            title="Our Story"
            image={HomeBG}
            imgAlt="Our Story"
            caption={StoryContent}
            bgColor={"#fff"}
          />
          <VMGO id="vmgo">
            <BGImage
              title="Vision"
              image={HomeBG}
              filterColor={"#fff"}
              caption={VisionContent}
            />
            <BGImage
              title="Mission"
              image={HomeBG}
              filterColor={"#fff"}
              caption={MissionContent}
            />
          </VMGO>
          <VMGO>
            <BGImageGoals title="Goals" image={HomeBG} filterColor={"#fff"} />
            <BGImageObjectives
              title="Objectives"
              image={HomeBG}
              filterColor={"#fff"}
            />
          </VMGO>
        </MainContent>
        <Footer />
      </HomeContent>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
`;
const VMGO = styled.div`
  width: 100vw;
  display: inline-flex;
  gap: 25px;
  @media (max-width: 768px) {
    display: block;
  }
`;
const HomeContent = styled.div`
  width: 100vw;
  height: 100vh;
`;
const MainContent = styled.div`
  margin-top: 60px;
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
