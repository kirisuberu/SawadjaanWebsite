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
export default function Home() {
  const StoryContent = `Abdurauf Sawadjaan Engineering Consultancy was founded with a clear purpose: to contribute to the betterment of communities through thoughtful, resilient, and enduring infrastructure. Our founder, Abdurauf I. Sawadjaan, was deeply inspired by the teachings of the Holy Qur’an, particularly the emphasis on stewardship and the responsibility of caring for the Earth. This divine guidance instilled in him the desire to build—both physically and spiritually—for the benefit of others, shaping his path toward becoming a civil engineer.

After earning his Bachelor of Science in Civil Engineering from Western Mindanao State University, Abdurauf's thirst for knowledge continued. He immediately pursued a master’s degree at the prestigious Polytechnic University of the Philippines. Along this journey, he was greatly influenced by Engr. June-June Santos, a mentor and expert in structural engineering who became not only a source of inspiration but also a partner in the industry.

Though Abdurauf ventured into other businesses, his heart remained in structural engineering. His passion for the field, combined with the guidance and mentorship of Engr. Santos, brought him back to the profession where he truly felt at home. With a clear vision to build a legacy of his own, he knew that his purpose lay in creating lasting structures that reflect both technical excellence and moral responsibility.

Starting his own consultancy was not without challenges. Limited capital posed a significant hurdle, but Abdurauf trusted in the wisdom and provision of Allah. He realized that the real wealth lay not in material resources, but in the knowledge, experience, and skills bestowed upon him by the Almighty. With that understanding, he founded Abdurauf Sawadjaan Engineering Consultancy, a company built on faith, perseverance, and a commitment to excellence.

As we continue to grow, our company remains grounded in humility and service. Every project we undertake is guided by our belief that engineering is a form of worship—an opportunity to contribute to society and leave behind a legacy that benefits others for generations to come.`;

  const VisionContent = `To be a beacon of excellence in engineering consultancy, building structures that serve communities with integrity, humility, and sustainability, while guided by strong moral values and a deep sense of responsibility.`;

  const MissionContent = `Our mission is to design and deliver engineering solutions that honor the values of stewardship and responsibility toward creation. We strive to create meaningful infrastructure that benefits both present and future generations, with a focus on quality, innovation, and service, all grounded in humility and dedication to the communities we serve.`;
  return (
    <Wrapper>
      <TopNavBar />
      <Sidebar />
      <HomeContent>
        <MainContent>
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
