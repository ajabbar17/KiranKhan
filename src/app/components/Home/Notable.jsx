import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Notable() {
  const projects = [
    {
      id: 1,
      title: "Death of Booti",
      img: "/dob.webp",
      link: "/death-of-booti",
    },
    {
      id: 2,
      title: "Womanifesto",
      img: "/womenifesto.webp",
      link: "/womanifesto",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="w-auto xl:max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#F49440] uppercase">
          Notable Projects
        </h2>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.link}>
              <div className="group relative overflow-hidden cursor-pointer">
                <Image
                  width={800}
                  height={600}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[70vh] object-cover transition-all duration-500 filter grayscale-75 group-hover:scale-110 group-hover:grayscale-0"
                />
                {/* Text overlay with white border */}
                <div className="absolute inset-6 border border-white group-hover:inset-4 transition-all flex items-center justify-center">
                  <div className="border border-white w-full flex items-center justify-center h-full bg-opacity-50 px-6 py-4 text-center">
                    <h3 className="text-white text-2xl bg-black/40 p-2 font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
