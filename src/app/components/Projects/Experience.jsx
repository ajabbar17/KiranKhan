"use client";
import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      title:
        "Speaker at School of Education BNU, Seminar on inclusivity in Education by M.Phil programme SE",
      date: "20th June 2025",
    },
    {
      title: "Juror NCA, Juror final thesis evaluation, Textile department",
      date: "December 2024",
    },
    {
      title:
        "Executive Director Design Summit 01 BNU & Walled City Lahore, WCLA",
      date: "March 2024",
    },
    {
      title:
        "Invited by Association of Designers India- (ADI) Ahmedabad Chapter- to give a talk",
      date: "September 2021",
    },
    {
      title: "Artist in Residence, Art Address, Oakville, Ontario Canada",
      date: "July 2018",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="heading text-3xl md:text-5xl font-bold text-center mb-16 tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          EXPERIENCE
        </motion.h2>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* First row - 2 cards */}
          <motion.div
            className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[0].title}
            </h3>
            <p className="text-gray-400 text-sm">{experiences[0].date}</p>
          </motion.div>

          <motion.div
            className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[1].title}
            </h3>
            <p className="text-gray-400 text-sm">{experiences[1].date}</p>
          </motion.div>

          {/* Second row - 2 cards */}
          <motion.div
            className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[2].title}
            </h3>
            <p className="text-gray-400 text-sm">{experiences[2].date}</p>
          </motion.div>

          <motion.div
            className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[3].title}
            </h3>
            <p className="text-gray-400 text-sm">{experiences[3].date}</p>
          </motion.div>
        </div>

        {/* Third row - centered single card */}
        <div className="flex justify-center mt-6">
          <motion.div
            className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[4].title}
            </h3>
            <p className="text-gray-400 text-sm">{experiences[4].date}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
