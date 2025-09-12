"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      className="relative py-16 w-full xl:h-[100vh] flex items-center justify-center bg-center "
      style={{ backgroundImage: "url('/dob/hero.webp')" }}
    >
      {/* Content */}
      <div className="relative z-10 xl:max-w-5xl mx-auto px-6 text-white">
        {/* Title + Date */}
        <div className="flex justify-center items-center mb-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-center heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            DEATH OF BOOTI
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          className="bg-black/55 p-2 md:px-5 md:py-9  rounded-3xl flex-col flex"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.span
            className="text-lg pr-3 text-end md:text-xl font-semibold text-gray-200"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            August 2024
          </motion.span>
          <motion.p
            className="text-lg  leading-relaxed text-center md:text-start  text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Kiran Khan is a fibre artist, craft intervention expert, and
            academician (since 1996). Her work centers on craft sustainability,
            capacity building, and the power of the hand—believing craft can
            foster social change and hold therapeutic value. Through fibre-based
            critical inquiries, Khan explores materiality, language, and
            storytelling. She particularly draws from the Kashmiri boteh,
            echoing the history of Kashmiri shawls—symbols of love, dedication,
            and excellence (Ames, 2004). Her practice traces the booti’s journey
            through Mughal patronage, political upheavals, and its eventual
            decline with the rise of the Jacquard loom. In doing so, her work
            revives narratives of resilience, history, and cultural memory
            embedded in textiles.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
