"use client";
import { useState } from "react";

export default function ProjectAccordions() {
  const [openAccordion, setOpenAccordion] = useState(); // First accordion open by default

  const projects = [
    {
      id: "01",
      title: "Project lead Womanifesto WeMend Project",
      date: "August 2024 - Oct 2024",
      collab: "Lahore Biennale Foundation and Dept of TFA",
      description:
        "Project exhibited at Sharjah Biennale 2025 at Flying Saucer Sharjah",
    },
    {
      id: "02",
      title:
        "UNESCO Project at SVAD, BNU Boosts Heritage Tourism and Cultural Development",
      date: "Feb – Nov 2021",
      collab: "UNESCO",
      description:
        "SVAD, BNU was awarded a UNESCO project involving two selected circuits for mapping, resourcing, and capacity building. Workshops raised awareness and aimed to generate revenue through heritage tourism by establishing cultural sites. These sites functioned as global craft hubs, offering multisensory experiences that blended information, entertainment, and knowledge-building for both tourists and locals.",
    },
    {
      id: "03",
      title:
        "Global Collaboration in the Weaving Eucalyptus Project with Liz Williamson",
      date: "May 2021 - Aug 2022",
      collab: "Liz Williamson – Australian fibre artist and weaver",
      description:
        "Collaborated with renowned fibre artist Liz Williamson in the Weaving Eucalyptus Project, dyeing organic fabrics like cotton, raw silk, and satin with locally sourced Eucalyptus (Safaida). Documented the natural dyeing process and sent the fabrics to Liz, who wove them into panels. This global initiative connected textile artists through shared environmental values. Each of the 100 panels included a QR code linking to the collaborator’s story and method. The complete work was exhibited at UNSW Galleries (June–August 2022) and is touring regional galleries across Victoria and NSW in 2023.",
    },
    {
      id: "04",
      title:
        "BNU x Kaarvan Workshop: Bridging Urban-Rural Voices on Rural Women's Day",
      date: "October 2017",
      collab: "Kaarvan Crafts Foundation and the Textile Department",
      description:
        "In celebration of Rural Women’s Day, BNU’s Textile Department and Kaarvan Crafts Foundation co-hosted a workshop aimed at breaking down the concept of “otherness” through storytelling and dialogue. Focused on inclusivity and expression, the workshop created a shared learning space between urban students and marginalized rural women from regions like Bahawalpur, Bahawalnagar, and Kasur. It fostered empathy, challenged societal norms set by the elite, and sought to blur boundaries between city and village, privilege and poverty, men and women.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="bg-black xl:min-h-screen py-6  xl:py-16 px-4">
      <h1 className="heading text-3xl md:text-5xl text-center font-bold mb-7 ">
        COLLABORATIONS
      </h1>
      <div className="max-w-6xl mx-auto">
        <div className="">
          {projects.map((project, index) => (
            <div key={index} className="border border-white">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between p-2 md:p-6 cursor-pointer hover:bg-gray-900 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-2 md:space-x-8">
                  <span className="text-white text-xl md:text-2xl font-bold min-w-[3rem]">
                    {project.id}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-medium">
                    {project.title}
                  </h3>
                </div>
                <div className="text-white text-xl md:text-2xl transition-transform duration-300 ease-in-out">
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      openAccordion === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordion === index
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-white bg-black">
                  <div className="p-3 md:p-6 md:pl-20">
                    <div className="grid grid-cols-1 md:grid-cols-2  md:gap-8 md:mb-6">
                      <div>
                        <div className="mb-4">
                          <span className="text-white font-semibold text-lg">
                            Date
                          </span>
                          <p className="text-gray-300 mt-1">{project.date}</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-4">
                          <span className="text-white font-semibold text-lg">
                            Collab
                          </span>
                          <p className="text-gray-300 mt-1">{project.collab}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 md:mt-6">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
