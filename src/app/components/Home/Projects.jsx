import React from "react";

const projects = [
  { id: 1, title: "Project 1", img: "/project1.webp" },
  { id: 2, title: "Project 2", img: "/project2.webp" },
  { id: 3, title: "Project 3", img: "/profile.webp" },
  { id: 4, title: "Project 4", img: "/project4.webp" },
  { id: 5, title: "Project 5", img: "/project5.webp" },
  { id: 6, title: "Project 6", img: "/project6.webp" },
  { id: 7, title: "Project 7", img: "/project7.webp" },
  { id: 8, title: "Project 8", img: "/project8.webp" },
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
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
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
