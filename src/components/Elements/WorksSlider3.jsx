import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
//images
import img1 from "../../assets/img/projects/structural/Picture1.jpg";
import img2 from "../../assets/img/projects/structural/Picture2.jpg";
import img3 from "../../assets/img/projects/structural/Picture3.jpg";
import img4 from "../../assets/img/projects/structural/Picture4.jpg";
import img5 from "../../assets/img/projects/structural/Picture5.jpg";
import img6 from "../../assets/img/projects/structural/Picture6.jpg";
import img7 from "../../assets/img/projects/structural/Picture7.jpg";
import img8 from "../../assets/img/projects/structural/Picture8.jpg";
import img9 from "../../assets/img/projects/structural/Picture9.jpg";
import img10 from "../../assets/img/projects/structural/Picture10.jpg";
import img11 from "../../assets/img/projects/structural/Picture11.jpg";
import img12 from "../../assets/img/projects/structural/Picture12.png";
import img13 from "../../assets/img/projects/structural/Picture13.jpg";
import img14 from "../../assets/img/projects/structural/Picture14.png";
import img15 from "../../assets/img/projects/structural/Picture15.jpg";
import img16 from "../../assets/img/projects/structural/Picture16.jpg";
import img17 from "../../assets/img/projects/structural/Picture17.png";
import img18 from "../../assets/img/projects/structural/Picture18.png";
import img19 from "../../assets/img/projects/structural/Picture19.png";
import img20 from "../../assets/img/projects/structural/Picture20.png";
import img21 from "../../assets/img/projects/structural/Picture21.jpg";
import img22 from "../../assets/img/projects/structural/Picture22.png";
import img23 from "../../assets/img/projects/structural/Picture23.png";
import img24 from "../../assets/img/projects/structural/Picture24.png";
import img25 from "../../assets/img/projects/structural/Picture25.png";
import img26 from "../../assets/img/projects/structural/Picture26.jpg";
import img27 from "../../assets/img/projects/structural/Picture27.jpg";
import img28 from "../../assets/img/projects/structural/Picture28.jpg";
import img29 from "../../assets/img/projects/structural/Picture29.jpg";
import img30 from "../../assets/img/projects/structural/Picture30.jpg";
import img31 from "../../assets/img/projects/structural/Picture31.jpg";
import img32 from "../../assets/img/projects/structural/Picture32.jpg";
import img33 from "../../assets/img/projects/structural/Picture33.jpg";
import img34 from "../../assets/img/projects/structural/Picture34.jpg";
import img35 from "../../assets/img/projects/structural/Picture35.jpg";
import img36 from "../../assets/img/projects/structural/Picture36.jpg";
import img37 from "../../assets/img/projects/structural/Picture37.jpg";
import img38 from "../../assets/img/projects/structural/Picture38.jpg";
import img39 from "../../assets/img/projects/structural/Picture39.jpg";
import img40 from "../../assets/img/projects/structural/Picture40.jpg";
import img41 from "../../assets/img/projects/structural/Picture41.jpg";

const WorksSlider2 = ({
  images = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
    {
      url: img5,
    },
    {
      url: img6,
    },
    {
      url: img7,
    },
    {
      url: img8,
    },
    {
      url: img9,
    },
    {
      url: img10,
    },
    {
      url: img11,
    },
    {
      url: img12,
    },
    {
      url: img13,
    },
    {
      url: img14,
    },
    {
      url: img15,
    },
    {
      url: img16,
    },
    {
      url: img17,
    },
    {
      url: img18,
    },
    {
      url: img19,
    },
    {
      url: img20,
    },
    {
      url: img21,
    },
    {
      url: img22,
    },
    {
      url: img23,
    },
    {
      url: img24,
    },
    {
      url: img25,
    },
    {
      url: img26,
    },
    {
      url: img27,
    },
    {
      url: img28,
    },
    {
      url: img29,
    },
    {
      url: img30,
    },
    {
      url: img31,
    },
    {
      url: img32,
    },
    {
      url: img33,
    },
    {
      url: img34,
    },
    {
      url: img35,
    },
    {
      url: img36,
    },
    {
      url: img37,
    },
    {
      url: img38,
    },
    {
      url: img39,
    },
    {
      url: img40,
    },
    {
      url: img41,
    },
  ],
  autoScrollInterval = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, autoScrollInterval);
    }
    return () => clearInterval(interval);
  }, [nextSlide, autoScrollInterval, isHovered]);

  return (
    <SliderContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SliderTrack $currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Slide key={index}>
            <SlideImage src={image.url} alt={image.title} />
            <TextOverlay>
              <Title>{image.title}</Title>
              <Subtitle>{image.subtitle}</Subtitle>
            </TextOverlay>
          </Slide>
        ))}
      </SliderTrack>

      <NavigationButton onClick={prevSlide} $position="left">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </NavigationButton>

      <NavigationButton onClick={nextSlide} $position="right">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </NavigationButton>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            onClick={() => goToSlide(index)}
            $active={index === currentIndex}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default WorksSlider2;

const SliderContainer = styled.div`
  position: relative;
  width: 70%;
  height: 32rem;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
`;

const SliderTrack = styled.div`
  display: flex;
  height: 100%;
  transition: transform 500ms ease-in-out;
  transform: translateX(-${(props) => props.$currentIndex * 100}%);
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }

  ${(props) => (props.$position === "left" ? "left: 1rem;" : "right: 1rem;")}
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 1rem;
  height: 0.75rem;
  font-size: 1px;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.15)"};
  transition: background-color 200ms;
`;
