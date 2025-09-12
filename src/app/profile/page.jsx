import React from 'react'
import Exhibitions from '../components/Projects/Exhibitions'
import Experience from '../components/Projects/Experience'
import ProjectAccordions from '../components/Projects/Accordions'
import Teaching from '../components/Projects/Teaching'
import ImageCarousel from '../components/exhibitions/ImageCarousel'

const page = () => {

  const data = [
    {
      id: 1,
      title: "Project Blue Print",
      images: ["/blue5.JPG", "/blue2.JPG", "/blue3.JPG", "/blue4.JPG"],
    }
  ]


  return (
    <div>
        <Exhibitions    />
        <ProjectAccordions />
        <Experience />
        <h1 className='heading text-3xl md:text-5xl font-bold text-center tracking-wider'>Seminars</h1>
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