import React from "react";

export default function Contact() {
  return (
    <div className=" text-white flex flex-col items-center w-full py-12 px-6">
      {/* Heading */}
      <h2 className="text-[#F49440] text-center text-4xl md:text-5xl font-bold mb-10 uppercase">
        GET IN TOUCH
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        {/* Left Side - Contact Form */}
        <div className="w-full max-w-md mx-auto">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="What’s your name?"
              className="bg-transparent border-b border-white focus:outline-none placeholder-gray-300 py-2"
            />
            <input
              type="email"
              placeholder="What’s your Email?"
              className="bg-transparent border-b border-white focus:outline-none placeholder-gray-300 py-2"
            />
            <textarea
              placeholder="Your message..."
              rows="4"
              className="bg-transparent border-b border-white focus:outline-none placeholder-gray-300 py-2 resize-none"
            />
            <button
              type="submit"
              className="w-fit px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Background with Info */}
        <div className="relative flex justify-center  items-center min-h-[350px] md:min-h-[400px] overflow-hidden rounded-lg">
          {/* Background Image */}
          <img
            src="/cushion.webp"
            alt="Background"
            className="absolute inset-0 w-full h-full object-contain md:object-contain z-20"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

          {/* Contact Info */}
          <div className="relative z-20 text-center md:text-left space-y-4 px-6 md:px-10">
            <p>
              <span className="font-semibold">Email</span>
              <br />
              kiranfkhan@gmail.com
            </p>
            <p>
              <span className="font-semibold">Resume</span>
              <br />
              <a href="#" className="underline hover:text-[#F49440]">
                downloadable resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
