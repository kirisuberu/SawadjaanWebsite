import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/1015/1000/500",
    "https://picsum.photos/id/1016/1000/500",
    "https://picsum.photos/id/1017/1000/500",
    "https://picsum.photos/id/1018/1000/500",
    "https://picsum.photos/id/1019/1000/500",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    function slide(direction) {
      const newIndex =
        direction === "left"
          ? (currentIndex - 1 + images.length) % images.length
          : (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }

    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        slide("left");
      } else if (event.key === "ArrowRight") {
        slide("right");
      }
    }

    function handleTouchStart(event) {
      let touchStartX = event.touches[0].pageX;
      let touchEndX = 0;

      function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].pageX;

        if (touchStartX > touchEndX) {
          slide("left");
        } else if (touchStartX < touchEndX) {
          slide("right");
        }
      }

      slider.addEventListener("touchend", handleTouchEnd, { once: true });

      return () => {
        slider.removeEventListener("touchend", handleTouchEnd);
      };
    }

    slider.addEventListener("keydown", handleKeyDown);
    slider.addEventListener("touchstart", handleTouchStart);

    const intervalId = setInterval(() => {
      slide("right");
    }, 3000);

    return () => {
      slider.removeEventListener("keydown", handleKeyDown);
      slider.removeEventListener("touchstart", handleTouchStart);
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  return (
    <div
      className="slider"
      ref={sliderRef}
      style={{
        width: "100%",
        height: "500px", // add a height to the slider
        backgroundColor: "red", // add a background color to the slider
      }}
    >
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${
            currentIndex *
            (sliderRef.current ? sliderRef.current.offsetWidth : 0)
          }px)`,
          width: `${images.length * 100}%`, // add a width to the slider track
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-slide"
            onClick={() => setCurrentIndex(index)}
            style={{
              width: `${100 / images.length}%`, // add a width to the slider slide
              height: "500px", // add a height to the slider slide
              backgroundImage: `url(${image})`,
              backgroundSize: "cover", // add a background size to the slider slide
              backgroundPosition: "center", // add a background position to the slider slide
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
