"use client";
import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoPlayer({ src, className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto rounded-lg"
        onEnded={handleVideoEnd}
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying && !showControls ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

        {/* Play/Pause Button */}
        <button
          className="relative z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 sm:p-6 rounded-full transition-all duration-300 transform hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        >
          {isPlaying ? (
            <Pause size={32} className="sm:w-12 sm:h-12" />
          ) : (
            <Play size={32} className="sm:w-12 sm:h-12 ml-1" />
          )}
        </button>
      </div>

      {/* Video Controls Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="text-white hover:text-orange-400 transition-colors duration-200"
          >
            {isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} className="ml-0.5" />
            )}
          </button>

          <div className="flex-1 text-white text-sm">
            {isPlaying ? "Playing..." : "Click to play"}
          </div>
        </div>
      </div>
    </div>
  );
}
