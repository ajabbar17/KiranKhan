import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const eventData = {
    "executive-director": [
      { img: "/director.JPG" },
      { img: "/director2.JPG" },
      { img: "/profilenew.JPG" },
      { img: "/kk.webp" },
    ],
    jugaar: [
      { img: "/jugaar.webp" },
      { img: "/jugaar3.JPG" },
      { img: "/jugaar/jugaar1.JPG" },
      { img: "/jugaar/jugaar2.JPG" },
      { img: "/jugaar/jugaar3.JPG" },
      { img: "/jugaar/jugaar10.JPG" },
      { img: "/jugaar/jugaar5.JPG" },
      { img: "/jugaar/jugaar6.JPG" },
      { img: "/jugaar/jugaar7.JPG" },
      { img: "/jugaar/jugaar8.JPG" },
      { img: "/jugaar/jugaar9.JPG" },
      { img: "/jugaar/jugaar4.JPG" },
    ],
    simultaneity: [
      { img: "/sim/sim5.JPG" },
      { img: "/sim/sim3.webp" },
      { img: "/sim/sim4.jpg" },
      { img: "/sim/sim1.JPG" },
      { img: "/sim/sim2.JPG" },
      { img: "/jugaar4.jpg" },
    ],

    "designing-pakistan": [
      { img: "/dip1.JPG" },
      { img: "/dip2.JPG" },
      { img: "/dip3.JPG" },
      { img: "/dp1.JPG" },
      { img: "/dp2.JPG" },
    ],
    "food-as-design": [
      { img: "/fd/fd4.JPG" },
      { img: "/fd/fd5.jpg" },
      { img: "/fd/fd6.JPG" },
      { img: "/fd1.jpg" },
      { img: "/fd2.JPG" },
      { img: "/fd3.JPG" },
      { img: "/fd/fd7.JPG" },
      { img: "/fd/fd8.JPG" },
      { img: "/fd4.JPG" },
    ],
    opening: [
      { img: "/ds.webp" },
      { img: "/ds1.webp" },
      { img: "/ds6.JPG" },
      { img: "/ds1.JPG" },
      { img: "/ds2.jpg" },
      { img: "/ds3.JPG" },
      { img: "/ds4.JPG" },
      { img: "/ds5.jpg" },
      { img: "/ds8.JPG" },
    ],
    "pavilions-materiality": [
      { img: "/pm4.JPG" },
      { img: "/pm/pm4.JPG" },
      { img: "/pm5.JPG" },
      { img: "/pm/pmnew1.jpg" },
      { img: "/pm/pmnew2.jpg" },
      { img: "/pm/pmnew3.jpg" },
      { img: "/pm/pmnew4.jpg" },
      { img: "/pm/pmnew5.JPG" },
      { img: "/pm/pmnew6.JPG" },
    ],
    "performance-as-design": [
      { img: "/pad1.JPG" },
      { img: "/pad2.JPG" },
      { img: "/padnew1.JPG" },
      { img: "/pad3.JPG" },
    ],
  };

  const p = await params;
  const event = p.event;
  const images = eventData[event] || [];

  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Dynamic Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F49440] uppercase">
          {event.replace(/-/g, " ")}
        </h1>

        {/* Check if images exist for this year */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((item, index) => (
              <div key={index} className="w-full">
                <Image
                  src={item.img}
                  alt={`Batch ${event} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-auto h-64 md:h-80 lg:h-auto object-fill shadow-lg"
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
    { event: "executive-director" },
    { event: "jugaar" },
    { event: "simultaneity" },
    { event: "designing-pakistan" },
    { event: "food-as-design" },
    { event: "opening" },
    { event: "pavilions-materiality" },
    { event: "performance-as-design" },
  ];
}
