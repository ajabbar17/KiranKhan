"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      className="relative py-16 w-full xl:h-[100vh] flex items-center justify-center bg-center "
      style={{ backgroundImage: "url('/womenifesto/hero.webp')" }}
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
            WOMANIFESTO
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
            Fabric as Social Identity — کون؟ کہاں؟ کیوں؟ (Who? Where? Why?) Led
            by Professor Kiran Khan, Head of Textile, Fashion & Accessories at
            MD-SVAD, the WeMend Project was presented at the Lahore Biennale
            Foundation (LBF 03) in collaboration with Womanifesto –
            International Art Exchange. The installation, titled Fabric as
            Social Identity, was curated at the historic YMCA Hall in Lahore and
            brought together over 67 fibre artists, students and faculty of BNU,
            artisans from Kaarvan Crafts Foundation, Baazyaft, Tarogil village,
            and members of differently-abled communities. Together, they
            stitched, embroidered, and upcycled fabric into a seventy-foot-long
            communal piece that reflected Lahore&apos;s diverse cultural
            identity. Rooted in the city&apos;s history and symbolism of YMCA as
            a place of inclusivity, the installation wove together three
            overarching narratives: Kaun (Who?) — personal stories, Kahan
            (Where?) — intergenerational stories, and Kyun (Why?) — political
            stories. Through this communal fabric, Kiran Khan emphasized
            textiles as carriers of memory, history, and resilience, stitching
            together individual voices into a collective social identity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
