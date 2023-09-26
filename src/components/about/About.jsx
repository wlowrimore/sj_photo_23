import React from 'react'

const About = () => {
  return (
    <main className='min-h-screen bg-overlay2 bg-no-repeat bg-fixed bg-cover bg-center flax flex-col items-center justify-center mx-auto'>
      <div className='flex flex-col justify-center items-center pt-28 pb-8'>
        <h1 className='text-6xl text-emerald-600 signature tracking-wider'>My Story</h1>
      </div>
      <article className='flex flex-col justify-center items-center p-12 w-1/3 mx-auto'>
        <p className='text-xl font-semibold tracking-wider leading-relaxed'>
          When given a photographic assignment, my goal is to attain the best,
          most authentic images possible. I want to provide my clients with
          compelling images or, as I’m fond of saying, images that they can
          hear.<br /><br />
          I am a marketing specialist with an MBA and I specialize in musically themed photography.
          However, whether you’re a musician, a manufacturer, a publicist or just someone
          who wants to arrange an opportunity to make some wonderful pictures, I
          can help you. Please contact me at 954-292-7933 for a free quote, or email me at: sayre@sayrejoanphotography.com.
        </p>
      </article>
    </main>
  )
}

export default About;