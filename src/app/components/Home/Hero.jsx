import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden text-white bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundPosition: "-180px center", // This moves the image further to the left
      }} // ensure /public/hero.png exists
    >
      {/* Optional dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Hero block */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl mb-2 font-bold">KIRAN KHAN</h1>
        <p className=" text-xl md:text-2xl font-normal xl:bottom-0 xl:absolute px-2  max-w-2xl">
          Head of department Textile Fashion & Accessories at <br />
          Beaconhouse National University (BNU) <br />
          An Interdisciplinary Fibre Artist <br />
          With an Experience of Over 30+ Years
        </p>
      </div>

      {/* Profile block (same section / same background) */}
      <div className="relative text-center xl:text-left px-6 xl:py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <h2 className="text-3xl font-bold mb-6 uppercase text-[#FFD400]">
            Profile
          </h2>
        </div>
        <div className="max-w-5xl  mx-auto grid md:grid-cols-2 gap-10 items-center justify-items-center text-center">
          {/* Left column */}
          <div className=" xl:text-left text-lg mb-auto font-medium">
            <p className="mb-4">
              Kiran Khan is a fibre artist, craft intervention expert, and
              academician. Her work revolves around the idea of craft
              sustainability and capacity building. Her practice revolves around
              the power of the hand since she feels that craft has the potential
              to create social change and has therapeutic value.
            </p>
            <p className=" ">
              Khan looks at fibre based critical enquires, investigations that
              augment our understanding of the context we live in. She feels
              fibre, the smallest tangible unit, accommodates, molds and
              stretches and is the most contextually resistant material
              resonating the capacity to narrate stories & to create dialogue
            </p>
          </div>

          {/* Right column */}
          <div>
            <img
              src="/profile.webp"
              alt="Profile"
              className=" shadow-lg h-[50vh] w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
