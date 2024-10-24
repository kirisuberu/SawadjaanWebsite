import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
//images
import Picture1 from "../../assets/img/projects/works1/Picture1.png";
import Picture2 from "../../assets/img/projects/works1/Picture2.png";
import Picture3 from "../../assets/img/projects/works1/Picture3.jpg";
import Picture4 from "../../assets/img/projects/works1/Picture4.jpg";
import Picture5 from "../../assets/img/projects/works1/Picture5.jpg";
import Picture6 from "../../assets/img/projects/works1/Picture6.jpg";
import Picture7 from "../../assets/img/projects/works1/Picture7.jpg";
import Picture8 from "../../assets/img/projects/works1/Picture8.jpg";
import Picture9 from "../../assets/img/projects/works1/Picture9.jpg";
import Picture10 from "../../assets/img/projects/works1/Picture10.jpg";
import Picture11 from "../../assets/img/projects/works1/Picture11.jpg";
import Picture12 from "../../assets/img/projects/works1/Picture12.jpg";
import Picture13 from "../../assets/img/projects/works1/Picture13.jpg";
import Picture14 from "../../assets/img/projects/works1/Picture14.jpg";

const WorksSlider1 = ({
  images = [
    {
      url: Picture1,
      title: "Projects 1",
    },
    {
      url: Picture2,
      title: "Projects 2",
    },
    {
      url: Picture3,
      title: "Lubag Residence",
      subtitle: "Naic,Cavite",
    },
    {
      url: Picture4,
      title: "Tumanda Residence",
      subtitle: "Fort Bonifacio, Taguig City",
    },
    {
      url: Picture5,
      title: "Salvacion Residence",
      subtitle: "Glenrose East, Taytay, Rizal",
    },
    {
      url: Picture6,
      title: "Villanueva Residence",
      subtitle: "Summerhills, Antipolo City",
    },
    {
      url: Picture7,
      title: "Suarez Residence",
      subtitle: "The Sonoma, Sta. Rosa, Laguna",
    },
    {
      url: Picture8,
      title: "Macarubbo Residence",
      subtitle: "Summerhills, Antipolo City",
    },
    {
      url: Picture9,
      title: "Mendi Residence",
      subtitle: "La Brea, Quezon City",
    },
    {
      url: Picture10,
      title: "Retirado Residence",
      subtitle: "Maharlika, Taytay, Rizal",
    },
    {
      url: Picture11,
      title: "Lim Residence",
      subtitle: "Vista Verde, Cainta, Rizal",
    },
    {
      url: Picture12,
      title: "Peralta Residence",
      subtitle: "Tanza, Cavite",
    },
    {
      url: Picture13,
      title: "Quirolgico Residence",
      subtitle: "Villa Magdalena 3, Caloocan City",
    },
    {
      url: Picture14,
      title: "Omengan Residence",
      subtitle: "Beverly Hills, Taytay, Rizal",
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

export default WorksSlider1;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 32rem;
  overflow: hidden;
  border-radius: 0.5rem;
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
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 200ms;
`;
