import React from "react";
import ExhibitionContent from "../components/exhibitions/ExhibitionContent";
import ImageCarousel from "../components/exhibitions/ImageCarousel";
import VideoPlayer from "../components/exhibitions/VideoPlayer";

const exhibitions = [
  {
    title: "Surangla Punjab",
    description:
      "This exhibition is the result of eight months of engagement with the people whose stories and dreams inspired us. The work unfolds thematically, echoing the melodies within these kahania. The mysticism of Uch, the Sufis, and sacred shrines emerge through monochromatic tile hues. The grandeur of Bahawalpur, its sunset Mahals, red brick architecture, and Rohri Sahib reflect the spirituality of space. The purity and sanctity of Central and Southern Punjab are shown through white — symbolizing rebirth, meditation, and timeless stories. Heer, marsiya, and Sacha Sauda evoke spiritual re-incarnation. Black and white mark a contemporary layer — capturing the journey’s energy, local customs, and the future woven with hope and dreams.",
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
    title: "Domestic Provocations",

    images: [
      "/dp/3.webp",
      "/dp/1.webp",
      "/dp/2.webp",
      "/dp/4.webp",
      "/dp/5.webp",
      "/dp/6.webp",
      "/dp/7.webp",
    ],
  },
  {
    title: "Islamic Art Festival",
    description:
      "South Asian Textiles are celebrated as timeless symbols of beauty and craftsmanship, continuing to inspire those who touch, see, use, and wear them. This exhibition titled ‘Talaash-e-Kamaal: The Pursuit of Excellence Through The Threads of Time’ reflects on the discourse of textile practices under the Mughal Islamic period, seeking to augment our understanding of the historical context in which these textiles were produced and the wider meanings that they acquired as they were traded and consumed both within the subcontinent and beyond. This show seeks to offer a contemporary interpretation through scholarly research, personal reflection, and syncretism - mirroring the creative context and impulses that allowed for Indo-Mughal textiles to flourish globally.",
    images: [
      "/iaf/iaf1.webp",
      "/iaf5.jpeg",
      "/iaf/iaf3.webp",
      "/iaf/iaf4.webp",
      "/iaf6.jpeg",
      "/iaf/iaf5.webp",
      "/iaf/iaf6.jpg",
    ],
  },
  {
    title: "Collaboration With Liz Williamson",
    description: `Liz Williamson Exhibition.
The Weaving Eucalyptus Project: A Global Textile Collaboration
Kiran Khan collaborated with renowned fibre artist and weaver Liz Williamson on the Weaving Eucalyptus Project, a groundbreaking initiative exploring natural materials and sustainable textile practices. Kiran Khan's contribution involved dyeing pure fabrics organic cotton, raw silk, and satin using locally sourced eucalyptus leaves, twigs, and bark, commonly known as Safaida.
Throughout the process, Kiran Khan meticulously documented the dyeing technique, resulting in unique fabrics that were sent to Liz to weave into panels. This global project united textile artists sharing an interest in the natural world, natural materials, and environmental concerns. The outcome was a stunning, globally-sourced woven fabric featuring eucalyptus-inspired pieces from around the world.
Liz incorporated Kiran Khan's dyed fabrics into the project, assigning a QR code to each panel. This digital component provides insight into the collaborative process, materials, and contributors. The completed project comprises 100 panels, exhibited at UNSW Galleries from 18 June to 14 August 2022. The installation will tour regional Victorian and NSW galleries in 2023.
The Weaving Eucalyptus Project celebrates international collaboration, sustainable practices, and the beauty of natural materials. By bringing together textile artists worldwide, this initiative acknowledges the importance of environmental awareness and artistic exchange.
`,
    images: ["/project4.webp", "/lw3.jpg"],
  },
  {
    title: "Sharjah Biennale",
    description: `Sharjah Biennale
Prof. Kiran Khan, Project lead  of WeMend, core contributor and TFA’s HOD visited the project at Sharjah Biennale’s 16th edition “To Carry”, housed in the iconic landmark Flying Saucer site in Sharjah, UAE. She was accompanied by TFA faculty member and WeMend contributing artist Qurratulain Sonia Kashmiri, who contributed “LALACH/لالچ”, a series of textile artworks made in collaboration with artisans of Baazyaft.
Sharjah Biennale 16th Edition (2025): To Carry
Organised by the Sharjah Art Foundation, and curated by Alia Swastika, Amal Khalaf, Megan Tamati-Quennell, Natasha Ginwala and Zeynep Öz, Sharjah Biennial 16 featured works by more than 190 participants, including over 200 new commissions, which were presented across the Emirate of Sharjah.`,

    images: [
      "/sb1.png",
      "/sb4.jpeg",
      "/sb3.png",
      "/sb4.JPG",
      "/sb5.jpg",
      "/sb6.JPG",
      "/sb7.jpg",
    ],
  },
  {
    title: "IAPEX 2025 DOT",
    description: `DOT.
“Discovering Opportunities in Transdisciplinarity” looks to inspire students and young generations of
fibre artists, architects, visual artists, designers, technologists, engineers, interdisciplinary practitioners
by providing a platform to enhance knowledge that lies between the intersections of multiple
discourses; improvising new avenues of collective academia and practice. By active collaboration
amongst cross-disciplinary educational institutes and industry practitioners, DOT encourages aspiring
students of various disciplines receiving direct mentorship from seasoned specialists, to enhance their
design ideology, gain hands-on experience, experiment within the field and see newer ways of looking
at art and architecture. We wish to instill within them a passion for discovering fresh avenues through
transdisciplinary design.
Curatorial note –
“Spatial materiality,”
Kiran Khan
This show, titled “Spatial materiality,” explores the intersection of textiles and architecture,
highlighting their roles in shaping our understanding and experience of space. Fibre and textile
materials are investigated for their tactility, dimension, visuality, and multisensory qualities in a real or
imagined context. Decoding textiles as skins of spatial intervention; they carry narratives of history,
memory, identity and context.
This exhibition shares how textile skins mediate spaces: creating, dividing, covering, and altering
perceptions to generate new meanings. These acts of mediation are explored through sustainable
practices that encompass the ecology of making/crafting, while simultaneously reframing our
relationship with textile waste through reuse and reclamation. These contemporary spatial-material
exhibits collectively create new meanings and opportunities for interaction within spaces, compelling
us to reflect on the broader role of textiles as skins in our environment throughout history and into the
future.
The exhibition has three thematic strands;
1. *Architexture: Textile and architectural practices to create a new discourse. Spatial configurations
that seamlessly integrate the two to create a technology embedded, futuristic/alternate user
experience.
2. *Sustainable Practices*: This theme explores eco-friendly approaches to material and making and
calls for spatial responses that explore fibre-based inquiries and connect to ideas of the green
revolution.
3. Historical x Indigenous Continuum*: Showcasing how art-design practitioners reimagine
local/indigenous materials and respond to historical textile practices intertwined in the -politics of
trade, global markets, shifting policies, cultural disconnects, from the colonial encounter to the Green
Revolution.
This open call for students (current or recent graduates), is rooted in conceptualising textiles as skins
of spatial investigation. The responses are open to all institutes across Pakistan; as an institutional
entry or individual. Each proposal is open as an interdisciplinary dialogue where communities
co-create solutions.
This exhibition seeks to create a dialogue which aims to serve as a catalyst for collective design. An act
of caring for our planet. It emphasizes hands-on learning, experimentation, and collaboration, bridging
the gap between academia and professional practice.`,

    images: [
      "/iapex/1.webp",
      "/iapex/2.webp",
      "/iapex/3.webp",
      "/iapex/4.webp",
      "/iapex/5.webp",
      "/iapex/6.webp",
      "/iapex/7.webp",
      "/iapex/8.webp",
      "/batch25/17.webp",
      "/batch25/19.webp",
    ],
  },
  // {
  //   title: "Food As Design",
  //   description:
  //     "Food as Design is an exhibition that explores the relationship between food and design. It features works from designers who have used food as a medium to create innovative and thought-provoking designs. The exhibition highlights the ways in which food can be used to communicate ideas, challenge conventions, and inspire new ways of thinking about design. Through a variety of mediums, including installations, sculptures, and interactive experiences, Food as Design celebrates the creativity and ingenuity of designers who are pushing the boundaries of what is possible with food.",
  //   pdfLink: "/pdf/food-as-design.pdf",
  //   images: [
  //       "/fd/fd1.webp",
  //       "/fd/fd2.webp",
  //       "/fd/fd3.webp",]

  // },
  // {
  //   title: "Jugaar",
  //   description:
  //     "Jugaar is an exhibition that celebrates the spirit of innovation and resourcefulness. It features works from artists and designers who have used limited resources to create impactful and meaningful designs. The exhibition highlights the ways in which creativity can thrive in the face of constraints, and how innovative thinking can lead to new solutions and possibilities. Through a variety of mediums, including installations, sculptures, and interactive experiences, Jugaar showcases the ingenuity and resilience of artists and designers who are finding new ways to create and inspire.",
  //   pdfLink: "/pdf/jugaar.pdf",
  //   images: [
  //       "/jugaar1.webp",
  //       "/jugaar2.webp",
  //       "/jugaar3.webp",
  //       "/jugaar4.webp",

  //   ]
  // },
  // {
  //   title: "Pavillions Materiality",
  //   description:
  //       "Pavilions Materiality is an exhibition that explores the relationship between architecture and materiality. It features works from architects and designers who have used innovative materials to create unique and inspiring pavilions. The exhibition highlights the ways in which materials can be used to create new forms, textures, and experiences, and how they can be integrated into the built environment. Through a variety of mediums, including installations, models, and interactive experiences, Pavilions Materiality celebrates the creativity and ingenuity of architects and designers who are pushing the boundaries of what is possible with materials.",
  //   pdfLink: "/pdf/jugaar.pdf",
  //   images: [
  //       "/pm/pm1.webp",
  //       "/pm/pm2.webp",
  //       "/pm/pm3.webp",
  //       "/pm/pm4.webp",

  //   ]
  // },
  // {
  //   title: "Simultaneity",
  //   description:
  //       "Simultaneity is an exhibition that explores the concept of multiple realities and perspectives. It features works from artists and designers who have used various mediums to create immersive and thought-provoking experiences. The exhibition highlights the ways in which different perspectives can coexist and interact, and how they can challenge our understanding of reality. Through a variety of mediums, including installations, sculptures, and interactive experiences, Simultaneity celebrates the diversity and complexity of human experience.",
  //   pdfLink: "/pdf/jugaar.pdf",
  //   images: [
  //       "/sim/sim1.webp",
  //       "/sim/sim2.webp",
  //       "/sim/sim3.webp",
  //       "/sim/sim4.webp",
  //    ]

  // },
];

const retrospective = {
  title: "Retrospective Textile and Fibre Expressions",
  description:
    "Retrospective: Fibre and Textile Expression” at Articulate Studios, Lahore, showcased works by 21 graduates of BNU’s Textile, Fashion, and Accessory program, celebrating 20 years of the department. Curated by Kiran Khan, Faseeh Saleem, and Eisha Liaqat, the exhibition highlighted how fibre and textile extend beyond craft into powerful forms of contemporary art. From Fahad Hussayn’s sculptural garments and Faseeh Saleem’s visceral video works to poignant installations by Aiman Gillani, Rafia Shafiq, and Anam Khurram, the show explored themes of memory, identity, trauma, and cultural history. The diverse works reaffirmed textile as a dynamic medium that bridges tradition and innovation.",
  images: [
    "/ret2.JPG",
    "/ret1.JPG",
    "/ret3.webp",
    "/ret5.JPG",
    "/ret6.JPG",
    "/ret7.JPG",
  ],
  pdfLink: "/pdf/retrospective.pdf",
  videosrc: "/retrospective.mp4",
};

const page = () => {
  return (
    <section className="py-16 bg-black text-white">
      <h1 className="md:text-6xl text-3xl text-center heading font-bold mb-7 mt-4">
        EXHIBITIONS
      </h1>
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
        <ExhibitionContent
          title={retrospective.title}
          description={retrospective.description}
          pdfLink={retrospective.pdfLink}
        />
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
};

export default page;
