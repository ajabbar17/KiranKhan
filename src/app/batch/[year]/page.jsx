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
                <img
                  src={item.img}
                  alt={`Batch ${year} - Image ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover shadow-lg"
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
