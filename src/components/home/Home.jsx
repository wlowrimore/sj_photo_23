import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen bg-maincustombg bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
      <section className='relative z-0'>
        <img src='./images/camera.png' alt='camera' width={1000} height={1000} className='opacity-20 w-[75rem]' />
        <div className='absolute bottom-[14rem] left-14 z-20'>
          <h1 className='text-8xl font-normal text-emerald-800 pb-6'>Welcome to my site!</h1>
          <h3 className='text-5xl font-thin tracking-wide leading-relaxed text-neutral-200 '>If you like what you see, and you are interested in purchasing a print, please reach out to me, and I will be happy to provide you with a quote.</h3>
        </div>
        <div id='button-group' className='flex justify-center gap-8 text-xl'>
          <div className='border-[1px] border-opacity-40 border-neutral-500 py-1 px-3 transition transform ease-in-out hover:bg-neutral-300 hover:bg-opacity-10 hover:text-neutral-700 duration-500'>
            <button type='button' className='text-neutral-300 tracking-widest'>Services</button>
          </div>
          <div className='border-[1px] border-opacity-40 border-neutral-500 py-1 px-3 transition transfrom ease-in-out hover:bg-neutral-300 hover:bg-opacity-10 hover:text-neutral-700 duration-500'>
            <button type='button' className='text-neutral-300 tracking-widest'>See Gallery</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home