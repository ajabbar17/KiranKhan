"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section
      className="relative w-full overflow-hidden text-white bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundPosition: "-180px center", // This moves the image further to the left
      }}
    >
      

      {/* Hero block */}
      <div className="relative heading h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl mb-2 font-bold"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          KIRAN KHAN
        </motion.h1>
        <motion.p
          className="text-xl text-white md:text-2xl font-normal px-2 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Head of department Textile Fashion & Accessories <br />
          Beaconhouse National University (BNU) <br />
          An Interdisciplinary Fibre Artist <br />
          With an Experience of Over 30+ Years
        </motion.p>
      </div>

      {/* Profile block (same section / same background) */}
      <div className="relative text-center xl:text-left px-6 xl:py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <motion.h2
            className="text-3xl font-bold mb-6 uppercase text-[#FFD400]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Profile
          </motion.h2>
        </div>
        <div className="max-w-5xl  mx-auto grid lg:grid-cols-2 gap-10 items-center justify-items-center text-center">
          {/* Left column */}
          <div className=" xl:text-left text-lg mb-auto font-medium">
            <motion.p
              className="mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              Kiran Khan is a fibre artist, craft intervention expert, and
              academician. Her work revolves around the idea of craft
              sustainability and capacity building. Her practice revolves around
              the power of the hand since she feels that craft has the potential
              to create social change and has therapeutic value.
            </motion.p>
            <motion.p
              className=""
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              Khan looks at fibre based critical enquires, investigations that
              augment our understanding of the context we live in. She feels
              fibre, the smallest tangible unit, accommodates, molds and
              stretches and is the most contextually resistant material
              resonating the capacity to narrate stories & to create dialogue
            </motion.p>
          </div>

          {/* Right column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Image
                width={400}
                height={600}
                src="/profile.webp"
                alt="Profile"
                className="shadow-lg h-[50vh] w-full max-w-sm object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
