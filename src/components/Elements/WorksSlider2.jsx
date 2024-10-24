import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
//images
import img1 from "../../assets/img/projects/works2/img1.png";
import img2 from "../../assets/img/projects/works2/img2.png";
import img3 from "../../assets/img/projects/works2/img3.png";
import img4 from "../../assets/img/projects/works2/img4.png";
import img5 from "../../assets/img/projects/works2/img5.png";
import img6 from "../../assets/img/projects/works2/img6.png";
import img7 from "../../assets/img/projects/works2/img7.png";
import img8 from "../../assets/img/projects/works2/img8.png";
import img9 from "../../assets/img/projects/works2/img9.png";
import img10 from "../../assets/img/projects/works2/img10.png";
import img11 from "../../assets/img/projects/works2/img11.png";
import img12 from "../../assets/img/projects/works2/img12.png";
import img13 from "../../assets/img/projects/works2/img13.png";
import img14 from "../../assets/img/projects/works2/img14.png";
import img15 from "../../assets/img/projects/works2/img15.png";
import img16 from "../../assets/img/projects/works2/img16.png";
import img17 from "../../assets/img/projects/works2/img17.png";
import img18 from "../../assets/img/projects/works2/img18.png";
import img19 from "../../assets/img/projects/works2/img19.png";
import img20 from "../../assets/img/projects/works2/img20.png";

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
  ],
  autoScrollInterval = 5000,
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
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 200ms;
`;
