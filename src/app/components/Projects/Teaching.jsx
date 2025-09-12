import React from "react";
import Link from "next/link";
import Image from "next/image";

const Teaching = () => {
  const data = [
    { id: 1, title: "Batch 2025", img: "/batch25.webp", link: "/batch/2025" },
    { id: 2, title: "Batch 2024", img: "/batch24.webp", link: "/batch/2024" },
    { id: 3, title: "Batch 2023", img: "/batch23.webp", link: "/batch/2023" },
    { id: 4, title: "Batch 2022", img: "/batch22.webp", link: "/batch/2022" },
    { id: 5, title: "Batch 2021", img: "/batch21/2.webp", link: "/batch/2021" },
    { id: 6, title: "Batch 2020", img: "/batch20.webp", link: "/batch/2020" },
    { id: 7, title: "Batch 2019", img: "/batch19.webp", link: "/batch/2019" },
    { id: 8, title: "Batch 2018", img: "/batch18.webp", link: "/batch/2018" },
    { id: 9, title: "Batch 2017", img: "/batch17.webp", link: "/batch/2017" },
    { id: 10, title: "Batch 2016", img: "/batch16.webp", link: "/batch/2016" },
    { id: 16, title: "Batch 2015", img: "/batch15.webp", link: "/batch/2015" },
    { id: 11, title: "Batch 2011", img: "/batch11.webp", link: "/batch/2011" },
    { id: 12, title: "Batch 2010", img: "/batch10.webp", link: "/batch/2010" },
    { id: 13, title: "Batch 2009", img: "/batch9.webp", link: "/batch/2009" },
    { id: 14, title: "Batch 2008", img: "/batch8.webp", link: "/batch/2008" },
    { id: 15, title: "Batch 2007", img: "/batch7.webp", link: "/batch/2007" },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#F49440] uppercase">
          Teaching Experience
        </h1>

        {/* Grid Layout - 2 items per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.map((batch) => (
            <div key={batch.id} className="group">
              {batch.link ? (
                <Link href={batch.link} className="block">
                  <div className="relative overflow-hidden  shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Image
                      width={800}
                      height={600}
                      loading="lazy"
                      src={batch.img}
                      alt={batch.title}
                      className="w-full h-64 md:h-[70vh] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mt-4 text-center group-hover:text-[#F49440] transition-colors duration-300">
                    {batch.title}
                  </h3>
                </Link>
              ) : (
                <div className="block cursor-default">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      width={800}
                      height={600}
                      loading="lazy"
                      src={batch.img}
                      alt={batch.title}
                      className="w-full h-64 md:h-80 object-cover opacity-70"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mt-4 text-center text-gray-400">
                    {batch.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
