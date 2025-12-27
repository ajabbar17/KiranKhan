"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flash
  const [isHydrated, setIsHydrated] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const imageRefs = useRef([]);
  const [imageslength, setImagesLength] = useState(images.length);
  useEffect(() => {
    // Set hydrated flag
    setIsHydrated(true);

    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
      setImagesPerView(mobile ? 1 : 2);
      setCurrent(0); // Reset position when screen size changes
      setTranslateX(0); // Reset translate when screen size changes
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Calculate translate based on image widths
  useEffect(() => {
    const calculateTranslate = () => {
      let totalWidth = 0;
      for (let i = 0; i < current; i++) {
        if (imageRefs.current[i]) {
          totalWidth += imageRefs.current[i].offsetWidth;
        }
      }
      setTranslateX(totalWidth);
    };

    // Small delay to ensure images are rendered and have proper dimensions
    const timer = setTimeout(calculateTranslate, 0);
    return () => clearTimeout(timer);
  }, [current, imagesPerView]);

  const maxIndex = images.length - 1;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

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
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!images || images.length === 0) {
    return <div className="text-center p-8">No images to display</div>;
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-colors duration-200 hidden sm:flex items-center justify-center"
        disabled={images.length <= imagesPerView}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-colors duration-200 hidden sm:flex items-center justify-center"
        disabled={images.length <= imagesPerView}
      >
        <ChevronRight size={24} />
      </button>

      {/* Images Container */}
      <div
        className="overflow-hidden "
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `translate3d(-${translateX}px, 0, 0)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`flex-shrink-0 pr-1  w-full
                  ${imageslength == 2 ? "xl:w-1/2" : "xl:w-auto"}
                `}
            >
              <Image
                width={800}
                height={600}
                src={image}
                alt={`Image ${index + 1}`}
                className={`w-full h-64 md:h-[74vh] object-fill
                    ${imageslength == 2 ? "xl:w-full" : "xl:w-auto"}
                  `}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              current === index
                ? "bg-[#F49440]"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Mobile Navigation Hint */}
      {isHydrated && isMobile && images.length > 1 && (
        <div className="text-center mt-3 text-sm text-gray-500">
          Swipe left or right to navigate
        </div>
      )}
    </div>
  );
}
