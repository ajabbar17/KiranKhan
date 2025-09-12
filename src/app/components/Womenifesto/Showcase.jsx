import React from "react";
import Link from "next/link";
import Image from "next/image";

const Showcase = () => {
  const data = [
   {img: "/womenifesto/1.webp",},
    {img: "/womenifesto/2.webp",},
    {img: "/womenifesto/3.webp",},
    {img: "/womenifesto/4.webp",},
    {img: "/womenifesto/5.webp",},
    {img: "/womenifesto/6.webp",},
    {img: "/womenifesto/7.webp",},
    {img: "/womenifesto/8.webp",},
    {img: "/womenifesto/9.webp",},
    {img: "/womenifesto/10.webp",},


    
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
     
        {/* Grid Layout - 2 items per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.map((batch,index) => (
            <div key={index} className="group">
             
                <div className="block cursor-default">
                  <div className="relative overflow-hidden shadow-lg">
                    <Image
                      width={800}
                      height={600}
                      src={batch.img}
                      alt={batch.img}
                      className="w-full h-64 md:h-[70vh] object-cover opacity-70"
                    />
                  </div>
                  
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
