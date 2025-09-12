import React from "react";
import ExhibitionContent from "../components/exhibitions/ExhibitionContent";
import ImageCarousel from "../components/exhibitions/ImageCarousel";
import VideoPlayer from "../components/exhibitions/VideoPlayer";

const exhibitions = [
  {
    title: "Surangla Punjab",
    description:
      "This exhibition is the result of eight months of engagement with the people whose stories and dreams inspired us. The work unfolds thematically, echoing the melodies within these kahania. The mysticism of Uch, the Sufis, and sacred shrines emerge through monochromatic tile hues. The grandeur of Bahawalpur, its sunset Mahals, red brick architecture, and Rohri Sahib reflect the spirituality of space. The purity and sanctity of Central and Southern Punjab are shown through white — symbolizing rebirth, meditation, and timeless stories. Heer, marsiya, and Sacha Sauda evoke spiritual re-incarnation. Black and white mark a contemporary layer — capturing the journey’s energy, local customs, and the future woven with hope and dreams...",
    pdfLink: "/pdf/surangla-punjab.pdf",
    images: [
      "/sp/sp1.webp",
      "/sp/sp2.webp",
      "/sp/sp3.webp",
      "/sp/sp4.webp",
      "/sp/sp5.webp",
      "/sp/sp6.webp",
    ],
  },
  {
    title: "Artpreneurial",
    description:
      "Artpreneurial is an exhibition that showcases the intersection of art and entrepreneurship. It features works from artists who have successfully turned their creative passions into thriving businesses. The exhibition highlights the innovative ways in which artists are leveraging technology, social media, and other tools to reach new audiences and build sustainable careers. Through a variety of mediums, including painting, sculpture, photography, and digital art, Artpreneurial celebrates the entrepreneurial spirit of artists and their ability to adapt and thrive in a rapidly changing world.",
    pdfLink: "/pdf/artpreneurial.pdf",
    images: [
        "/ap/ap1.webp",
        "/ap/ap2.webp",
        "/ap/ap3.webp",
        "/ap/ap4.webp",
        "/ap/ap5.webp",
    ]
  },
  {
    title: "Islamic Art Festival",
    description:
      "South Asian Textiles are celebrated as timeless symbols of beauty and craftsmanship, continuing to inspire those who touch, see, use, and wear them. This exhibition titled ‘Talaash-e-Kamaal: The Pursuit of Excellence Through The Threads of Time’ reflects on the discourse of textile practices under the Mughal Islamic period, seeking to augment our understanding of the historical context in which these textiles were produced and the wider meanings that they acquired as they were traded and consumed both within the subcontinent and beyond. This show seeks to offer a contemporary interpretation through scholarly research, personal reflection, and syncretism - mirroring the creative context and impulses that allowed for Indo-Mughal textiles to flourish globally...",
    pdfLink: "/pdf/islamic-art-festival.pdf",
    images: [
        "/iaf/iaf1.webp",
        "/iaf/iaf2.webp",
        "/iaf/iaf3.webp",
        "/iaf/iaf4.webp",
        "/iaf/iaf5.webp",
    ]
  },
  {
    title: "Food As Design",
    description:
      "Food as Design is an exhibition that explores the relationship between food and design. It features works from designers who have used food as a medium to create innovative and thought-provoking designs. The exhibition highlights the ways in which food can be used to communicate ideas, challenge conventions, and inspire new ways of thinking about design. Through a variety of mediums, including installations, sculptures, and interactive experiences, Food as Design celebrates the creativity and ingenuity of designers who are pushing the boundaries of what is possible with food.",
    pdfLink: "/pdf/food-as-design.pdf",
    images: [
        "/fd/fd1.webp",
        "/fd/fd2.webp",
        "/fd/fd3.webp",]

  },
  {
    title: "Jugaar",
    description:
      "Jugaar is an exhibition that celebrates the spirit of innovation and resourcefulness. It features works from artists and designers who have used limited resources to create impactful and meaningful designs. The exhibition highlights the ways in which creativity can thrive in the face of constraints, and how innovative thinking can lead to new solutions and possibilities. Through a variety of mediums, including installations, sculptures, and interactive experiences, Jugaar showcases the ingenuity and resilience of artists and designers who are finding new ways to create and inspire.",
    pdfLink: "/pdf/jugaar.pdf",
    images: [
        "/jugaar1.webp",
        "/jugaar2.webp", 
        "/jugaar3.webp", 
        "/jugaar4.webp", 

    ]
  },
  {
    title: "Pavillions Materiality",
    description:
        "Pavilions Materiality is an exhibition that explores the relationship between architecture and materiality. It features works from architects and designers who have used innovative materials to create unique and inspiring pavilions. The exhibition highlights the ways in which materials can be used to create new forms, textures, and experiences, and how they can be integrated into the built environment. Through a variety of mediums, including installations, models, and interactive experiences, Pavilions Materiality celebrates the creativity and ingenuity of architects and designers who are pushing the boundaries of what is possible with materials.",
    pdfLink: "/pdf/jugaar.pdf",
    images: [
        "/pm/pm1.webp",
        "/pm/pm2.webp", 
        "/pm/pm3.webp",
        "/pm/pm4.webp",
        

    ]
  },
  {
    title: "Simultaneity",
    description:
        "Simultaneity is an exhibition that explores the concept of multiple realities and perspectives. It features works from artists and designers who have used various mediums to create immersive and thought-provoking experiences. The exhibition highlights the ways in which different perspectives can coexist and interact, and how they can challenge our understanding of reality. Through a variety of mediums, including installations, sculptures, and interactive experiences, Simultaneity celebrates the diversity and complexity of human experience.",
    pdfLink: "/pdf/jugaar.pdf",
    images: [
        "/sim/sim1.webp",
        "/sim/sim2.webp",
        "/sim/sim3.webp",
        "/sim/sim4.webp",
     ]

    
  },


];


const retrospective = {
  title: "Retrospective",
  description:"Retrospective: Fibre and Textile Expression” at Articulate Studios, Lahore, showcased works by 21 graduates of BNU’s Textile, Fashion, and Accessory program, celebrating 20 years of the department. Curated by Kiran Khan, Faseeh Saleem, and Eisha Liaqat, the exhibition highlighted how fibre and textile extend beyond craft into powerful forms of contemporary art. From Fahad Hussayn’s sculptural garments and Faseeh Saleem’s visceral video works to poignant installations by Aiman Gillani, Rafia Shafiq, and Anam Khurram, the show explored themes of memory, identity, trauma, and cultural history. The diverse works reaffirmed textile as a dynamic medium that bridges tradition and innovation.",
  images: [
    "/ret2.jpg",
    "/ret1.jpg",
    "/ret3.webp",],
  pdfLink: "/pdf/retrospective.pdf",
  videosrc: "/retrospective.mp4",
}

const page = () => {
 return (
    <section className="py-16 bg-black text-white">
        <h1 className="md:text-6xl text-3xl text-center heading font-bold mb-7 mt-4">EXHIBITIONS</h1>
      {exhibitions.map((exhibit, index) => (
        <div key={index} className="mb-16">
          <ExhibitionContent
            title={exhibit.title}
            description={exhibit.description}
            pdfLink={exhibit.pdfLink}
          />
          <ImageCarousel images={exhibit.images} />
        </div>
      ))}

      <div>
        <ExhibitionContent title={retrospective.title} description={retrospective.description} pdfLink={retrospective.pdfLink} />
        <ImageCarousel images={retrospective.images} />
        <div className="flex justify-center mt-8 px-3">
          <VideoPlayer
            src={retrospective.videosrc}
            className="w-full max-w-4xl rounded-lg"
          />
        </div>
      </div>

    </section>
  );
}

export default page