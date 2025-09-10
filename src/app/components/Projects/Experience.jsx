export default function Experience() {
  const experiences = [
    {
      title: "Speaker at School of Education BNU,Seminar on inclusivity in Education by M.Phil programme SE",
      date: "20th June 2025"
    },
    {
      title: "Juror NCA, Juror final thesis evaluation, Textile department",
      date: "December 2024"
    },
    {
      title: "Executive Director Design Summit 01 BNU & Walled City Lahore, WCLA",
      date: "March 2024"
    },
    {
      title: "Invited by Association of Designers India- (ADI) Ahmedabad Chapter- to give a talk",
      date: "September 2021"
    },
    {
      title: "Artist in Residence, Art Address, Oakville, Ontario Canada",
      date: "July 2018"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="heading text-5xl font-bold text-center mb-16 tracking-wider">
          EXPERIENCE
        </h2>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* First row - 2 cards */}
          <div className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[0].title}
            </h3>
            <p className="text-gray-400 text-sm">
              {experiences[0].date}
            </p>
          </div>

          <div className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[1].title}
            </h3>
            <p className="text-gray-400 text-sm">
              {experiences[1].date}
            </p>
          </div>

          {/* Second row - 2 cards */}
          <div className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[2].title}
            </h3>
            <p className="text-gray-400 text-sm">
              {experiences[2].date}
            </p>
          </div>

          <div className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[3].title}
            </h3>
            <p className="text-gray-400 text-sm">
              {experiences[3].date}
            </p>
          </div>
        </div>

        {/* Third row - centered single card */}
        <div className="flex justify-center mt-6">
          <div className="bg-[#191919] rounded-2xl p-6 border border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-lg font-medium leading-relaxed mb-4">
              {experiences[4].title}
            </h3>
            <p className="text-gray-400 text-sm">
              {experiences[4].date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}