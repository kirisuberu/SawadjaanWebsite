import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
//images
import Picture1 from "../../assets/img/aboutImageSlider/1.png";
import Picture2 from "../../assets/img/aboutImageSlider/2.jpeg";
import Picture3 from "../../assets/img/aboutImageSlider/3.jpeg";
import Picture4 from "../../assets/img/aboutImageSlider/4.jpeg";
import Picture5 from "../../assets/img/aboutImageSlider/5.jpeg";
import Picture6 from "../../assets/img/aboutImageSlider/6.jpeg";
import Picture7 from "../../assets/img/aboutImageSlider/7.jpeg";
import Picture8 from "../../assets/img/aboutImageSlider/8.jpeg";
import Picture9 from "../../assets/img/aboutImageSlider/9.jpeg";
import Picture10 from "../../assets/img/aboutImageSlider/10.jpeg";
import Picture11 from "../../assets/img/aboutImageSlider/11.jpeg";
import Picture12 from "../../assets/img/aboutImageSlider/12.jpeg";
import Picture13 from "../../assets/img/aboutImageSlider/13.jpeg";
import Picture14 from "../../assets/img/aboutImageSlider/14.jpeg";

const WorksSlider1 = ({
  images = [
    {
      url: Picture1,
    },
    {
      url: Picture2,
    },
    {
      url: Picture3,
    },
    {
      url: Picture4,
    },
    {
      url: Picture5,
    },
    {
      url: Picture6,
    },
    {
      url: Picture7,
    },
    {
      url: Picture8,
    },
    {
      url: Picture9,
    },
    {
      url: Picture10,
    },
    {
      url: Picture11,
    },
    {
      url: Picture12,
    },
    {
      url: Picture13,
    },
    {
      url: Picture14,
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

export default WorksSlider1;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
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
  height: 100%;
  width: 100%;
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