import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const batchData = {
    2025: [
      { img: "/batch25/1.webp" },
      { img: "/batch25/2.webp" },
      { img: "/batch25/3.webp" },
      { img: "/batch25/4.webp" },
      { img: "/batch25/5.webp" },
      { img: "/batch25/6.webp" },
      { img: "/batch25/7.webp" },
      { img: "/batch25/8.webp" },
      { img: "/batch25/9.webp" },
      { img: "/batch25/10.webp" },
    ],
    2024: [
      { img: "/batch24/1.webp" },
      { img: "/batch24/2.webp" },
      { img: "/batch24/3.webp" },
      { img: "/batch24/4.webp" },
      { img: "/batch24/5.webp" },
      { img: "/batch24/6.webp" },
      { img: "/batch24/7.webp" },
      { img: "/batch24/8.webp" },
      { img: "/batch24/9.webp" },
      { img: "/batch24/10.webp" },

 ],
    2023: [
      { img: "/batch23/1.webp" },
      { img: "/batch23/2.webp" },
        { img: "/batch23/3.webp" },
        { img: "/batch23/4.webp" },
        { img: "/batch23/5.webp" },
        { img: "/batch23/6.webp" },
        { img: "/batch23/7.webp" },
        { img: "/batch23/8.webp" },
        { img: "/batch23/9.webp" },
        { img: "/batch23/10.webp" },
    ],

    2022: [
      { img: "/batch22/1.webp" },
      { img: "/batch22/2.webp" },
        { img: "/batch22/3.webp" },
        { img: "/batch22/4.webp" },

        { img: "/batch22/5.webp" },
        { img: "/batch22/6.webp" },
        { img: "/batch22/7.webp" },
        { img: "/batch22/8.webp" },
        { img: "/batch22/9.webp" },
        { img: "/batch22/10.webp" },
    ],
    2021: [
        { img: "/batch21/1.webp" },

        { img: "/batch21/2.webp" },
        { img: "/batch21/3.webp" },
        { img: "/batch21/4.webp" },
        { img: "/batch21/5.webp" },
        { img: "/batch21/6.webp" },
        { img: "/batch21/7.webp" },
        { img: "/batch21/8.webp" },
        { img: "/batch21/9.webp" },
        { img: "/batch21/10.webp" },
    ],
    2020: [
        { img: "/batch20/1.webp" },
        { img: "/batch20/2.webp" },
        { img: "/batch20/3.webp" },
        { img: "/batch20/4.webp" },
        { img: "/batch20/5.webp" },
        { img: "/batch20/6.webp" },
        { img: "/batch20/7.webp" },
        { img: "/batch20/8.webp" },
        { img: "/batch20/9.webp" },
    ],
    2019: [ 
         { img: "/batch19/1.webp" },
        { img: "/batch19/2.webp" },
        { img: "/batch19/3.webp" },
        { img: "/batch19/4.webp" },
        { img: "/batch19/5.webp" },
        { img: "/batch19/6.webp" },
        { img: "/batch19/7.webp" },
        { img: "/batch19/8.webp" },
        { img: "/batch19/9.webp" },
        { img: "/batch19/10.webp" },
    ],
    2018: [
        { img: "/batch18/1.webp" },
        { img: "/batch18/2.webp" },
        { img: "/batch18/3.webp" },
        { img: "/batch18/4.webp" },
        { img: "/batch18/5.webp" },
        { img: "/batch18/6.webp" },
        { img: "/batch18/7.webp" },
        { img: "/batch18/8.webp" },
        { img: "/batch18/9.webp" },
        { img: "/batch18/10.webp" },
    ],
    2017: [
        { img: "/batch17/1.webp" },
        { img: "/batch17/2.webp" },
        { img: "/batch17/3.webp" },
        { img: "/batch17/4.webp" },
        { img: "/batch17/5.webp" },
        { img: "/batch17/6.webp" },
        { img: "/batch17/7.webp" },
        { img: "/batch17/8.webp" },
        { img: "/batch17/9.webp" },
        { img: "/batch17/10.webp" },    
    ],
    2016: [
        { img: "/batch16/1.webp" },
        { img: "/batch16/2.webp" },
        { img: "/batch16/3.webp" },
        { img: "/batch16/4.webp" },
        { img: "/batch16/5.webp" },
        { img: "/batch16/6.webp" },
        { img: "/batch16/7.webp" },
        { img: "/batch16/8.webp" },
        { img: "/batch16/9.webp" },
        { img: "/batch16/10.webp" },
    ],
    2015: [
        { img: "/batch15/1.webp" },
        { img: "/batch15/2.webp" },
        { img: "/batch15/3.webp" },
        { img: "/batch15/4.webp" },
        { img: "/batch15/5.webp" },
        { img: "/batch15/6.webp" },
        { img: "/batch15/7.webp" },
        { img: "/batch15/8.webp" },
        { img: "/batch15/9.webp" },
        { img: "/batch15/10.webp" },
    ],
    2011: [
        { img: "/batch11/1.webp" },
        { img: "/batch11/2.webp" },
        { img: "/batch11/3.webp" },
        { img: "/batch11/4.webp" },
        { img: "/batch11/5.webp" },
        { img: "/batch11/6.webp" },
        { img: "/batch11/7.webp" },
        { img: "/batch11/8.webp" },
        { img: "/batch11/9.webp" },
        { img: "/batch11/10.webp" },
    ],
    2010: [
        { img: "/batch10.webp" },
    ],
    2009: [
        { img: "/batch9/1.webp" },
        { img: "/batch9/2.webp" },
        { img: "/batch9/3.webp" },
        { img: "/batch9/4.webp" },
        { img: "/batch9/5.webp" },
        { img: "/batch9/6.webp" },],
    2008: [ 
        { img: "/batch8/1.webp" },
        { img: "/batch8/2.webp" },
        { img: "/batch8/3.webp" },
        { img: "/batch8/4.webp" },
        { img: "/batch8/5.webp" },
        { img: "/batch8/6.webp" },
        { img: "/batch8/7.webp" },
        { img: "/batch8/8.webp" },
        { img: "/batch8/9.webp" },
        { img: "/batch8/10.webp" },
    ],
    2007: [
        { img: "/batch7.webp" },

    ],


  };

  const p  = await params;
  const year = p.year;
  const images = batchData[year] || [];

  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Dynamic Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F49440] uppercase">
          Batch {year}
        </h1>

        {/* Check if images exist for this year */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((item, index) => (
              <div key={index} className="w-full">
            <Image
                  src={item.img}
                  alt={`Batch ${year} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover shadow-lg"
                  priority={index < 4} // preload first 2
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 text-xl">
            <p>No images available for Batch {year}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  return [
    { year: "2025" },
    { year: "2024" },
    { year: "2023" },
    { year: "2022" },
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
    { year: "2016" },
    { year: "2015" },
    { year: "2011" },
    { year: "2010" },
    { year: "2009" },
    { year: "2008" },
    { year: "2007" },
  ];
}
