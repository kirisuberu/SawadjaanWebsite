import styled from "styled-components";

import TopNavBar from "../Nav/TopNavBar";
import Sidebar from "../Nav/Sidebar";
//assets
import viteLogo from "/vite.svg";
import HomeBG from "../../assets/img/sampleBG.jpg";
import ImageSlider from "../Elements/ImageSlider";
export default function Home() {
  return (
    <Wrapper>
      <TopNavBar />
      <Sidebar />
      <HomeContent>
        <MainContent>
          <ImageSlider />
        </MainContent>
      </HomeContent>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
`;
const HomeContent = styled.div`
  width: 100vw;
  height: 100vh;
`;
const MainContent = styled.div`
  margin-top: 60px;
  width: 100vw;
`;
