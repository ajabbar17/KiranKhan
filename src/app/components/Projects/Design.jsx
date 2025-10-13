import React from "react";
import Link from "next/link";
import Image from "next/image";

const Design = () => {
  const data = [
    { id: 1, title: "Kiran Khan As Executive Director", img: "/kk.png", link: "/design-summit/executive-director" },
    { id: 6, title: "Design Summit Opening", img: "/dsopeningnew.JPG", link: "/design-summit/opening" },
    { id: 2, title: "Jugaar", img: "/jugaarnew.jpg", link: "/design-summit/jugaar" },
    { id: 3, title: "Simultaenity As Design", img: "/simnew.jpeg", link: "/design-summit/simultaenity" },
    { id: 4, title: "Designing Pakistan", img: "/dpnew.JPG", link: "/design-summit/designing-pakistan" },
    { id: 5, title: "Food As Design", img: "/fd/fd1.webp", link: "/design-summit/food-as-design" },
    { id: 7, title: "Pavilions Materiality", img: "/pmnew.JPG", link: "/design-summit/pavilions-materiality" },
    { id: 8, title: "Performance As Design", img: "/pad1.JPG", link: "/design-summit/performance-as-design" },
    
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-2 text-[#F49440] uppercase">
          Design Summit
        </h1>

        {/* Grid Layout - 2 items per row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
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
                      className="w-full h-64 md:h-[77vh] object-fill transition-transform duration-300 group-hover:scale-110"
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

export default Design;
