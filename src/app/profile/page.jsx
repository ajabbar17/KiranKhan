import React from 'react'
import Exhibitions from '../components/Projects/Exhibitions'
import Experience from '../components/Projects/Experience'
import ProjectAccordions from '../components/Projects/Accordions'
import Teaching from '../components/Projects/Teaching'
import ImageCarousel from '../components/exhibitions/ImageCarousel'
import Design from '../components/Projects/Design'

const page = () => {

  const data = [
    {
      id: 1,
      title: "Project Blue Print",
      images: ["/blue5.JPG", "/blue2.JPG", "/blue3.JPG","/blue6.JPG"],
    },
    {
      id: 2,
      title: "Art Address Artist In Residence",
      images: ["/address1.JPG", "/address2.JPG", "/address3.JPG","/address4.JPG","/address5.JPG","/address6.JPG"],
    },
    {
      id: 3,
      title: "Artistic Xploratorium",
      images: ["/artistic1.JPG", "/artistic2.JPG", "/artistic3.JPG","/artistic4.JPG"],

    },
    {
      id: 4,
      title: "Karvaan Online",
      images: ["/karvaan1.jpg", "/karvaan2.jpg"],
      },
    {
      id: 5,
      title: "ADI India and Expo 2020",
      images: ["/adi.jpg", "/expo.jpg"],
      },


  ]


  return (
    <div>
        {/* <Exhibitions    /> */}
        <Design />
        <ProjectAccordions />
        <Experience />
        <h1 className='heading text-3xl md:text-5xl font-bold text-center uppercase tracking-wider'>Seminars / Talks</h1>
        {
          data.map((item) => (
            <div key={item.id} className='my-10'>
              <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-10'> {item.title} </h2>
              <ImageCarousel images={item.images} />
            </div>
          ))
        }
        {/* <Teaching /> */}

    </div>
  )
}

export default page