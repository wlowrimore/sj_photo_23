import React from 'react'
import PublicationsGalleryCard from './PublicationsGalleryCard'

const PublicationsGallery = () => {
  return (
    <main className='min-h-screen bg-neutral-800 bg-no-repeat bg-fixed bg-cover bg-center flax flex-col items-center justify-center mx-auto'>
      <div className='flex flex-col justify-center items-center py-20'>
        <h1 className='text-6xl text-emerald-600 signature tracking-wider'>Publications Gallery</h1>
      </div>
      <div className='flex justify-center items-center mx-auto pb-20'>
        <PublicationsGalleryCard />
      </div>
    </main>
  )
}

export default PublicationsGallery