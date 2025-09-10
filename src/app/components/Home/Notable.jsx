import React from "react";

export default function Notable() {
  const projects = [
    {
      id: 1,
      title: "Death of Buti",
      img: "/dob.webp",
    },
    {
      id: 2,
      title: "Womenifesto",
      img: "/womenifesto.webp",
    },
    // You can add more projects here
    // { id: 3, title: "Another Project", img: "/project3.png" },
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
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              <img
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
          ))}
        </div>
      </div>
    </section>
  );
}
