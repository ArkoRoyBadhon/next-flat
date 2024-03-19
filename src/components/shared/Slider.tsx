"use client";
import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import Image from "next/image";
import { useState } from "react";

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full mx-auto">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        onClick={() => goToPrevSlide()}
      >
        <Image
          src="/images/arrow-chevron-left.png"
          alt=""
          height={25}
          width={27}
        />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 rotate-180"
        onClick={() => goToNextSlide()}
      >
        <Image
          src="/images/arrow-chevron-left.png"
          alt=""
          height={25}
          width={27}
        />
      </button>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[297px] flex-shrink-0">
            <Image
              src={slide}
              alt={`Slide ${index}`}
              width={617}
              height={297}
              className="w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-[10px] flex justify-center mt-4 space-x-2 z-10">
          {slides.map((_, index) => ( 
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
