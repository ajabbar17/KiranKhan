import React from "react";

export default function ExhibitionContent({ title, description, pdfLink }) {
  return (
    <div className="text-center max-w-3xl px-3 mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      {pdfLink && (
        <a
          href={pdfLink}
          download
          className="text-orange-400 hover:underline"
        >
          Read more …
        </a>
      )}
    </div>
  );
}
