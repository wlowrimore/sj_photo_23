import React from 'react'
import MusiciansGalleryCard from './MusiciansGalleryCard'

const MusiciansGallery = () => {
  return (
    <main className='min-h-screen bg-neutral-700 bg-fixed bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center mx-auto'>
      <div className='flex flex-col justify-center items-center py-20'>
        <h1 className='text-6xl text-emerald-600 signature tracking-wider'>Musicians Gallery</h1>
      </div>
      <div className='flex justify-center items-center mx-auto pb-20'>
        <MusiciansGalleryCard />
      </div>
    </main>
  )
}

export default MusiciansGallery