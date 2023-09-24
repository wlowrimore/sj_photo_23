import React from 'react'

const Gallery = () => {
  return (
    <main className='min-h-screen bg-neutral-800 flex flex-col justify-center items-center mx-auto'>
      <h1 className='uppercase text-2xl pb-16 text-gray-400 tracking-wider'>Choose your gallery</h1>
      <div className='grid grid-cols-3 gap-40'>
        <div className='flex flex-col items-center border border-emerald-700 rounded pt-6 px-6'>
          <h3 className='signature text-4xl tracking-widest text-emerald-700'>Musicians</h3>
          <div className='py-8'>
            <img src='./images/icons/musicians.svg' alt='microphone icon' width={500} height={500} className='w-16 opacity-60' />
          </div>
        </div>
        <div className='flex flex-col items-center border border-emerald-700 rounded pt-6 px-6'>
          <h3 className='signature text-4xl tracking-widest text-emerald-700'>Publications</h3>
          <div className='py-8'>
            <img src='./images/icons/publications.svg' alt='book icon' width={500} height={500} className='w-44 opacity-60' />
          </div>
        </div>
        <div className='flex flex-col items-center border border-emerald-700 rounded pt-6 px-6'>
          <h3 className='signature text-4xl tracking-widest text-emerald-700'>Architecture</h3>
          <div className='py-8'>
            <img src='./images/icons/architecture.svg' alt='buildings icon' width={500} height={500} className='w-32 opacity-60' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Gallery