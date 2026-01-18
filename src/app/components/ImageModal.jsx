"use client";

import Image from "next/image";
import { useState } from "react";

const ImageModal = ({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} cursor-pointer`}
        priority={priority}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "90vh",
              }}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
