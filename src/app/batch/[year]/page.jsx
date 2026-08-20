import React from "react";
import ImageModal from "@/app/components/ImageModal";

const page = async ({ params }) => {
  const batchData = {
    2026: [
    
    
      { img: "/batch26/5.webp" },
      { img: "/batch26/6.webp" },
      { img: "/batch26/7.webp" },
      { img: "/batch26/8.webp" },
      { img: "/batch26/9.webp" },
      { img: "/batch26/10.webp" },
      { img: "/batch26/11.webp" },
      { img: "/batch26/12.webp" },
      { img: "/batch26/13.webp" },
      { img: "/batch26/14.webp" },
      { img: "/batch26/15.webp" },
      { img: "/batch26/16.webp" },
      { img: "/batch26/17.webp" },
      { img: "/batch26/18.webp" },
      { img: "/batch26/19.webp" },
      { img: "/batch26/20.webp" },
      { img: "/batch26/21.webp" },
      { img: "/batch26/23.webp" },
      { img: "/batch26/24.webp" },
      { img: "/batch26/26.webp" },
      { img: "/batch26/27.webp" },
      { img: "/batch26/28.webp" },
      { img: "/batch26/29.webp" },
      { img: "/batch26/30.webp" },
      { img: "/batch26/31.webp" },
      { img: "/batch26/32.webp" },
      { img: "/batch26/33.webp" },

    ],

    2025: [
      { img: "/batch25/5.webp" },
      { img: "/batch25/6.webp" },
      { img: "/batch25/15.webp" },
      { img: "/batch25/16.webp" },
      { img: "/batch25/17.webp" },
      { img: "/batch25/18.webp" },
      { img: "/batch25/19.webp" },
      { img: "/batch25/20.JPG" },
    ],
    2024: [
      { img: "/batch24/3.webp" },
      { img: "/batch24/5.webp" },
      { img: "/batch24/7.webp" },
      { img: "/batch24/8.webp" },
      { img: "/batch24/11.webp" },
      { img: "/batch24/12.webp" },
      { img: "/batch24/13.webp" },
      { img: "/batch24/14.webp" },
      { img: "/batch24/15.webp" },
      { img: "/batch24/16.JPG" },

    ],
    2023: [
      { img: "/batch23/1.webp" },
      { img: "/batch23/2.webp" },
      { img: "/batch23/3.webp" },
      { img: "/batch23/4.webp" },
      { img: "/batch23/5.webp" },
      { img: "/batch23/6.webp" },
      { img: "/batch23/11.webp" },
      { img: "/batch23/12.webp" },
      { img: "/batch23/13.webp" },
      { img: "/batch23/14.webp" },
      { img: "/batch23/15.webp" },
      { img: "/batch23/16.webp" },
      { img: "/batch23/17.webp" },
    ],

    2022: [
      { img: "/batch22/1.webp" },
      { img: "/batch22/2.webp" },
      { img: "/batch22/3.webp" },
      { img: "/batch22/4.webp" },
      { img: "/batch22/7.webp" },
      { img: "/batch22/8.webp" },
      { img: "/batch22/9.webp" },
      { img: "/batch22/11.webp" },
      { img: "/batch22/12.webp" },
      { img: "/batch22/13.webp" },
      { img: "/batch22/14.webp" },
    ],
    2021: [
      { img: "/batch21/1.webp" },

      { img: "/batch21/2.webp" },

      { img: "/batch21/5.webp" },
      { img: "/batch21/6.webp" },
      { img: "/batch21/8.webp" },
      { img: "/batch21/9.webp" },
      { img: "/batch21/10.webp" },
      { img: "/batch21/11.JPG" },
      { img: "/batch21/12.JPG" },
      { img: "/batch21/13.JPG" },
      { img: "/batch21/14.jpg" },
      { img: "/batch21/16.jpg" },
      { img: "/batch21/17.jpg" },
      { img: "/batch21/18.jpg" },
      { img: "/batch21/19.jpg" },
      { img: "/batch21/20.jpg" },
    ],
    2020: [
      { img: "/batch20/1.webp" },
      { img: "/batch20/9.webp" },
      { img: "/batch20/3.webp" },
      { img: "/batch20/4.webp" },
      { img: "/batch20/5.webp" },
      { img: "/batch20/8.webp" },
      { img: "/batch20/10.jpg" },
      { img: "/batch20/11.jpg" },
      { img: "/batch20/12.jpg" },
      { img: "/batch20/13.jpg" },
      { img: "/batch20/14.jpg" },

    ],
    2019: [
      { img: "/batch19/1.webp" },

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
      { img: "/batch17/6.webp" },
      { img: "/batch17/7.webp" },
      { img: "/batch17/8.webp" },
      { img: "/batch17/10.webp" },
    ],
    2016: [
      { img: "/batch16/1.webp" },
      { img: "/batch16/2.jpg" },
      { img: "/batch16/3.webp" },
      { img: "/batch16/4.webp" },
      { img: "/batch16/5.webp" },
      { img: "/batch16/6.webp" },
      { img: "/batch16/7.webp" },
      { img: "/batch16/8.webp" },
      { img: "/batch16/9.webp" },
      { img: "/batch16/10.webp" },
      { img: "/batch16/11.JPG" },
    ],
    2015: [
      { img: "/batch15/2.webp" },
      { img: "/batch15/3.webp" },
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
        { img: "/batch10/1.JPG" },
        { img: "/batch10/2.JPG" },
        { img: "/batch10/3.JPG" },
        { img: "/batch10/4.JPG" },
      

    ],
    2009: [
      { img: "/batch9/1.webp" },
      { img: "/batch9/2.webp" },
      { img: "/batch9/3.webp" },
      { img: "/batch9/4.webp" },
      { img: "/batch9/5.webp" },
      { img: "/batch9/6.webp" },
    ],
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
    2007: [{ img: "/batch7.webp" }],
  };

  const p = await params;
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
                <ImageModal
                  src={item.img}
                  alt={`Batch ${year} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 lg:h-[70vh] object-cover shadow-lg"
                  priority={index < 4}
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
