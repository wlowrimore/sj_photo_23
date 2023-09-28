import React from 'react'
import { Fade } from 'react-awesome-reveal'

import PublicationsGalleryCard from './PublicationsGalleryCard'

const PublicationsGallery = () => {
  return (
    <main className='min-h-screen bg-neutral-800 bg-no-repeat bg-fixed bg-cover bg-center flax flex-col items-center justify-center mx-auto pt-12'>
      <Fade cascade duration={2000} triggerOnce="true">
        <div className='flex flex-col justify-center items-center pt-28 pb-20'>
          <h1 className='text-6xl text-emerald-600 signature tracking-wider'>Publications Gallery</h1>
        </div>
      </Fade>
      <Fade cascade delay={500} duration={3000} triggerOnce="true">
        <div className='flex justify-center items-center mx-auto pb-20'>
          <PublicationsGalleryCard />
        </div>
      </Fade>
    </main>
  )
}

export default PublicationsGallery