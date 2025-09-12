"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Awards() {
  const awardsData = [
    {
      id: 1,
      date: "December 2015",
      text: "Awarded Gold Medal for overall outstanding CGPA, M.Sc. Linguistics 2012–2014, BNU, Lahore.",
      img: "/awards1.webp",
      img2: "/awards1-2.png",
    },
    {
      id: 2,
      date: "March 2018",
      text: "Recognized for Excellence in Textile Research and Creative Practice at National Level.",
      img: "/awards2.webp",
      img2: "/awards2-2.png",
    },
    {
      id: 3,
      date: "July 2020",
      text: "Honored with Lifetime Achievement Award in Fiber Arts and Teaching.",
      img: "/awards3.webp",
      img2: "/awards3-2.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % awardsData.length);
  };

  return (
    <section className="w-full min-h-[100vh] lg:h-[95vh]  py-20 flex flex-col items-center text-white">
      <div className=" 2xl:min-w-5xl text-center xl:text-left ">
        <h2 className="text-3xl font-bold mb-2 text-[#FFD400]">AWARDS</h2>
      </div>

      <div
        className="relative w-full flex  justify-center px-6 py-28  bg-center"
        style={{ backgroundImage: "url('/awards.webp')" }}
      >
        <div className="relative h-[70vh] lg:h-[50vh] flex xl:flex-row flex-col w-auto xl:max-w-5xl overflow-hidden  gap-10 items-center ">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={awardsData[index].id}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 w-full xl:text-left text-center xl:w-1/2"
            >
              <h3 className="font-bold text-2xl  mb-10">
                {awardsData[index].date}
              </h3>
              <p className="text-xl xl:pr-16">{awardsData[index].text}</p>
            </motion.div>
          </AnimatePresence>

          {/* Right Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={awardsData[index].img}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Primary Image */}
              <motion.img
                src={awardsData[index].img}
                alt="Award"
                className="shadow-lg w-full max-w-md object-cover"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover Image */}
              <motion.img
                src={awardsData[index].img2}
                alt="Award Hover"
                className="shadow-lg w-full max-w-md object-cover absolute top-0 left-0"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrow Button */}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button onClick={handleNext}>
            <img
              src="/arrow.png"
              alt="Next"
              className="w-14 h-14 cursor-pointer hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
