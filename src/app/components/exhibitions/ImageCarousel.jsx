"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flash
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set hydrated flag
    setIsHydrated(true);

    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setImagesPerView(mobile ? 1 : 2);
      setCurrent(0); // Reset position when screen size changes
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const maxIndex = Math.max(0, images.length - imagesPerView);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - imagesPerView));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + imagesPerView));
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

    if (isLeftSwipe && current < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && current > 0) {
      prevSlide();
    }
  };

  if (!images || images.length === 0) {
    return <div className="text-center p-8">No images to display</div>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
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
        className="overflow-hidden rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `translate3d(-${
              current * (100 / imagesPerView)
            }%, 0, 0)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-1 sm:px-2 w-full sm:w-1/2"
            >
              <Image
                width={800}
                height={600}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-64 md:h-[70vh] object-cover "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {Array.from({ length: Math.ceil(images.length / imagesPerView) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index * imagesPerView)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                Math.floor(current / imagesPerView) === index
                  ? "bg-[#F49440]"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          )
        )}
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
