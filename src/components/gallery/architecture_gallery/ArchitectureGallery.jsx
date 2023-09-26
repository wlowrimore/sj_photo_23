import React from 'react'
import ArchitectureGalleryCard from './ArchitectureGalleryCard'

const ArchitectureGallery = () => {
  return (
    <main className='min-h-screen bg-neutral-500 bg-fixed bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center mx-auto'>
      <div className='flex flex-col justify-center items-center py-20'>
        <h1 className='text-6xl text-emerald-600 signature tracking-wider'>Architecture Gallery</h1>
      </div>
      <div className='flex justify-center items-center mx-auto pb-20'>
        <ArchitectureGalleryCard />
      </div>
    </main>
  )
}

export default ArchitectureGallery