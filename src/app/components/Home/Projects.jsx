import Image from "next/image";
import React from "react";

const projects = [
  { id: 1, title: "Jugaar", img: "/project1.webp" },
  { id: 2, title: "Surangla Punjab", img: "/sp/sp2.webp" },
  { id: 3, title: "Kiran Khan as Executive", img: "/profile.webp" },
  { id: 4, title: "Liz Williamson", img: "/project4.webp" },
  { id: 5, title: "Artpreneurial", img: "/ap/ap4.webp" },
  { id: 6, title: "Islamic Art Festival", img: "/iaf/iaf1.webp" },
  { id: 7, title: "Islamic Art Festival", img: "/iaf/iaf3.webp" },
  { id: 8, title: "Retrospective", img: "/ret2.JPG" },
];

export default function Projects() {
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F49440] uppercase">
        Projects
      </h2>

      {/* Responsive Grid */}
      <div className="w-full flex justify-center items-center">
        <div className="grid w-full max-w-3xl gap-2 grid-cols-1 place-content-center sm:grid-cols-1 md:grid-cols-3 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
              relative group overflow-hidden 
              ${project.id === 1 ? "xl:col-start-1 xl:row-start-1" : ""}
              ${project.id === 2 ? "xl:col-start-1 xl:row-start-2" : ""}
              ${
                project.id === 3
                  ? "xl:col-span-2 xl:row-span-2 xl:col-start-2 xl:row-start-1"
                  : ""
              }
              ${project.id === 4 ? "xl:row-start-3 xl:col-start-1" : ""}
              ${project.id === 5 ? "xl:row-start-3 xl:col-start-2" : ""}
              ${project.id === 6 ? "xl:row-start-3 xl:col-start-3" : ""}
              ${project.id === 7 ? "xl:row-start-4 xl:col-start-1" : ""}
              ${
                project.id === 8
                  ? "xl:col-span-2 xl:row-start-4 xl:col-start-2"
                  : ""
              }
            `}
            >
              {/* Background Image */}
              <Image
                width={800}
                height={600}
                loading="lazy"
                src={project.img}
                alt={project.title}
                className="w-full grayscale-50 group-hover:grayscale-0 h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg bg-black/50 p-2 font-semibold">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
