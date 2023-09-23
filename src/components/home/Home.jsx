import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen bg-maincustombg bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center'>
      <section className='relative'>
        <img src='./images/camera.png' alt='camera' width={1000} height={1000} className='opacity-20 w-[75rem]' />
        <div className='absolute bottom-[22rem] z-20' >
          <h1 className='text-8xl text-emerald-800 pb-6'>Welcome to my site!</h1>
          <h3 className='text-4xl text-neutral-200 '>If you like what you see, and you are interested in purchasing a print, please reach out to me, and I would be happy to provide you with a quote.</h3>
        </div>
      </section>
    </main>
  )
}

export default Home