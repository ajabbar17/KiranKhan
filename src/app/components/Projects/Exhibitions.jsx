"use client";
import React, { useState } from "react";

const exhibitionsData = [
  {
    title: "Design Summit Opening",
    images: ["/ds2.webp", "/ds.webp", "/ds1.webp"],
  },
  {
    title: "Kiran Khan as Executive",
    images: ["/profile.webp", "/kk.webp", "/kk1.webp"],
  },
  {
    title: "Jugaar",
    images: ["/jugaar.webp", "/jugaar1.webp", "/fan.webp"],
  },
  {
    title: "Simultaneity",
    images: ["/sim/sim1.webp", "/sim/sim2.webp", "/sim/sim3.webp"],
  },
  {
    title: "Pavillions Materiality",
    images: ["/pm/pm1.webp", "/pm/pm2.webp", "/pm/pm3.webp"],
  },
  {
    title: "Food As Design",
    images: ["/fd/fd1.webp", "/fd/fd2.webp", "/fd/fd3.webp"],
  },
  {
    title: "Performance As Design",
    images: ["/pad1.JPG", "/pad2.JPG", "/pad3.JPG"],
  },
  {
    title: "Designing Pakistan Day",
    images: ["/dip1.JPG", "/dip2.JPG", "/dip3.JPG"],
  },
];

export default function Exhibitions() {
  return (
    <section className="relative bg-black text-white py-16 px-3">
      <h2 className="text-[#F49440] text-center text-3xl md:text-5xl font-bold mt-5 mb-12">
        PROJECTS
      </h2>
      <h2 className="text-2xl flex flex-col items-center text-center mb-12  w-fit mx-auto pb-2">
        Design Summit
        <span
        className="w-[100px] mt-3 border  border-[#ffffffa7]"
        > </span>
      </h2>
      <div className="relative w-full h-[500vh] xl:h-[700vh] max-w-5xl mx-auto">
        {exhibitionsData.map((exhibit, index) => (
          <ExhibitionCard key={index} exhibit={exhibit} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExhibitionCard({ exhibit, index }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % exhibit.images.length);
  };
  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + exhibit.images.length) % exhibit.images.length
    );
  };

  // Function to get positioning classes based on current active image and image index
  const getImagePositioning = (imageIndex, currentIndex, totalImages) => {
    const isActive = imageIndex === currentIndex;

    if (totalImages === 3) {
      // For 3 images, define specific positioning for each case
      if (currentIndex === 0) {
        // When first image is active, it should be centered
        return {
          0: "transform translate-x-0", // Active - center
          1: "transform translate-x-[150px] md:translate-x-[380px] xl:translate-x-[500px]", // Right
          2: "transform -translate-x-[150px] md:-translate-x-[380px] xl:-translate-x-[500px]", // Far right
        }[imageIndex];
      } else if (currentIndex === 1) {
        // When middle image is active, it should be centered
        return {
          0: "transform translate-x-[150px] md:translate-x-[380px] xl:translate-x-[500px]", // Left
          1: "transform translate-x-0", // Active - center
          2: "transform -translate-x-[150px] md:-translate-x-[380px] xl:-translate-x-[500px]", // Right
        }[imageIndex];
      } else if (currentIndex === 2) {
        // When last image is active, it should be centered
        return {
          0: "transform translate-x-[150px] md:translate-x-[380px] xl:translate-x-[500px]", // Far left
          1: "transform -translate-x-[150px] md:-translate-x-[380px] xl:-translate-x-[500px]", // Left
          2: "transform translate-x-0", // Active - center
        }[imageIndex];
      }
    }

    // Fallback for other numbers of images
    const offset = imageIndex - currentIndex;
    const translateX = offset * (isActive ? 0 : offset > 0 ? 16 : -16);
    return `transform translate-x-${Math.abs(translateX)}`;
  };

  return (
    <div
      className="sticky bg-black border border-[#7D1515] shadow-lg overflow-hidden mb-16"
      style={{
        // marginTop: index === 0 ? "50px" : `${50 + index * 10}px`,
        top: `${50 + index * 35}px`,
      }} // stacked effect with consistent spacing
    >
      <h3 className="text-xl bg-[#7D1515]  font-semibold mb-4 px-6 py-2">
        {exhibit.title}
      </h3>

      {/* Carousel - All images visible */}
      <div className="relative rounded-lg w-full h-[40vh] xl:h-[70vh] flex items-center justify-center p-4 overflow-hidden">
        <div className="relative flex items-center justify-center w-full h-full">
          {exhibit.images.map((img, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-500 cursor-pointer ${
                i === current
                  ? "scale-110 z-10 w-[60%] xl:w-1/2"
                  : "scale-75 z-0 w-[30%] xl:w-1/3"
              } ${getImagePositioning(i, current, exhibit.images.length)}`}
              onClick={() => setCurrent(i)}
            >
              <img
                src={img}
                alt={`${exhibit.title} - Image ${i + 1}`}
                className={`w-full h-48 md:h-[30vh]  xl:h-[50vh] object-fill rounded-xl shadow-lg transition-all duration-500 ${
                  i === current ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 z-20"
        >
          <svg
            className="w-5 h-5"
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
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 z-20"
        >
          <svg
            className="w-5 h-5"
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
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {exhibit.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current
                  ? "bg-[#F49440] scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
