import React from 'react'
import { Fade } from 'react-awesome-reveal'

import MusiciansGalleryCard from './MusiciansGalleryCard'

const MusiciansGallery = () => {
  return (
    <main className='overflow-auto min-h-screen bg-neutral-700 bg-fixed bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center mx-auto xl:pt-12'>
      <Fade cascade duration={2000} triggerOnce="true">
        <div className='flex flex-col justify-center items-center pb-8 pt-28 xl:pb-20'>
          <h1 className='text-4xl xl:text-6xl text-emerald-600 signature tracking-wider'>Musicians Gallery</h1>
        </div>
      </Fade>
      <Fade cascade delay={500} duration={3000} triggerOnce="true">
        <div className='flex justify-center items-center mx-auto pb-20'>
          <MusiciansGalleryCard />
        </div>
      </Fade>
    </main>
  )
}

export default MusiciansGallery