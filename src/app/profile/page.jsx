import React from 'react'
import Exhibitions from '../components/Projects/Exhibitions'
import Experience from '../components/Projects/Experience'
import ProjectAccordions from '../components/Projects/Accordions'
import Teaching from '../components/Projects/Teaching'

const page = () => {
  return (
    <div>
        <Exhibitions    />
        <ProjectAccordions />
        <Experience />
        {/* <Teaching /> */}

    </div>
  )
}

export default page