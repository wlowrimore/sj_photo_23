import React from 'react'

const Services = () => {
  return (
    <main className='min-h-screen bg-neutral-800/80 flex flex-col justify-center items-center mx-auto'>
      <section className=''>
        <div className='flex flex-col justify-center items-center pb-20'>
          <h1 className='text-6xl text-emerald-600 signature tracking-wider'>Services</h1>
        </div>
        <div className='grid grid-cols-3 gap-40'>

          <div className='flex flex-col items-center'>
            <div className='py-8'>
              <img src='./images/services/architecture.svg' alt='microphone icon' width={500} height={500} className='w-56 h-36 border-4 border-neutral-800 rounded-[50%] opacity-60' />
            </div>
            <h3 className='signature text-4xl tracking-widest text-emerald-600'>Architecture</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='py-8'>
              <img src='./images/services/landscapes.svg' alt='book icon' width={500} height={500} className='w-56 border-4 border-neutral-800 rounded-[50%] opacity-60' />
            </div>
            <h3 className='signature text-4xl tracking-widest text-emerald-600'>Landscapes</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='py-8'>
              <img src='./images/services/music.svg' alt='buildings icon' width={500} height={500} className='w-52 h-36 border-4 border-neutral-800 rounded-[50%] opacity-60' />
            </div>
            <h3 className='signature text-4xl tracking-widest text-emerald-600'>Musicians</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='py-8'>
              <img src='./images/services/portraits.svg' alt='buildings icon' width={500} height={500} className='w-32 opacity-60' />
            </div>
            <h3 className='signature text-4xl tracking-widest text-emerald-600'>Portraits</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='py-8'>
              <img src='./images/services/real_estate.svg' alt='buildings icon' width={500} height={500} className='w-56 h-36 border-4 border-neutral-800 rounded-[50%] opacity-60' />
            </div>
            <h3 className='signature text-4xl tracking-widest text-emerald-600'>Real Estate</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='py-8'>
              <img src='./images/services/sports.svg' alt='buildings icon' width={500} height={500} className='w-28 opacity-60' />
            </div>
            <h3 className='signature text-4xl tracking-widest text-emerald-600'>Sports</h3>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Services