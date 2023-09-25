import React from 'react'
import MusiciansGalleryCard from './MusiciansGalleryCard'

const MusiciansGallery = () => {
  return (
    <main className='min-h-screen bg-musicianscustombg bg-no-repeat bg-fixed bg-cover bg-center flax flex-col items-center justify-center mx-auto'>
      <div className='flex flex-col justify-center items-center py-20'>
        <h1 className='text-6xl text-start text-neutral-300 tracking-wider'>Musicians Gallery</h1>
      </div>
      <div className='flex justify-center items-center mx-auto pb-20'>
        <MusiciansGalleryCard />
      </div>
    </main>
  )
}

export default MusiciansGallery