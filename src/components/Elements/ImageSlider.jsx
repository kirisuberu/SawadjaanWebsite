import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";

//assets
import img1 from "../../assets/img/aboutImageSlider/1.png";
import img2 from "../../assets/img/aboutImageSlider/2.jpeg";
import img3 from "../../assets/img/aboutImageSlider/3.jpeg";
import img4 from "../../assets/img/aboutImageSlider/4.jpeg";
import img5 from "../../assets/img/aboutImageSlider/5.jpeg";
import img6 from "../../assets/img/aboutImageSlider/6.jpeg";
import img7 from "../../assets/img/aboutImageSlider/7.jpeg";
import img8 from "../../assets/img/aboutImageSlider/8.jpeg";
import img9 from "../../assets/img/aboutImageSlider/9.jpeg";
import img10 from "../../assets/img/aboutImageSlider/10.jpeg";
import img11 from "../../assets/img/aboutImageSlider/11.jpeg";
import img12 from "../../assets/img/aboutImageSlider/12.jpeg";
import img13 from "../../assets/img/aboutImageSlider/13.jpeg";
import img14 from "../../assets/img/aboutImageSlider/14.jpeg";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slideContainerRef = useRef(null);

  const minSwipeDistance = 50;

  const slides = [
    { id: 1, src: img1, alt: "Slide 1" },
    { id: 2, src: img2, alt: "Slide 2" },
    { id: 3, src: img3, alt: "Slide 3" },
    { id: 4, src: img4, alt: "Slide 4" },
    { id: 5, src: img5, alt: "Slide 5" },
    { id: 6, src: img6, alt: "Slide 6" },
    { id: 7, src: img7, alt: "Slide 7" },
    { id: 8, src: img8, alt: "Slide 8" },
    { id: 9, src: img9, alt: "Slide 9" },
    { id: 10, src: img10, alt: "Slide 10" },
    { id: 11, src: img11, alt: "Slide 11" },
    { id: 12, src: img12, alt: "Slide 12" },
    { id: 13, src: img13, alt: "Slide 13" },
    { id: 14, src: img14, alt: "Slide 14" },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - slideContainerRef.current.offsetLeft);
    setScrollLeft(slideContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > minSwipeDistance) {
      if (walk > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsDragging(false);
    }
  };

  return (
    <SliderContainer>
      <SlideWrapper
        ref={slideContainerRef}
        $currentSlide={currentSlide}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            draggable="false"
          />
        ))}
      </SlideWrapper>

      <PrevButton onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </PrevButton>

      <NextButton onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </NextButton>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $active={currentSlide === index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default ImageSlider;

const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  max-height: 80vh;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  height: 100%;
  transition: transform 500ms ease-out;
  transform: translateX(-${(props) => props.$currentSlide * 100}%);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Slide = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

  user-select: none;
  -webkit-user-drag: none;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 300ms;
  display: none;
  color: white;

  @media (min-width: 768px) {
    display: block;
    ${SliderContainer}:hover & {
      opacity: 1;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 16px;
`;

const NextButton = styled(NavigationButton)`
  right: 16px;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 300ms;
  cursor: pointer;
  padding: 0;
`;
