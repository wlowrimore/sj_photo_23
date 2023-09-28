import { useState, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal';

import testimonials from '../../testimonials.json';


const TestimonialsOverlay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div className='w-screen h-[24rem] bg-overlay2 bg-no-repeat bg-start bg-cover flex items-center'>
      <h1 className='text-3xl md:text-7xl lg:text-9xl pl-7 md:pl-14 lg:pl-20 font-bold absolute tracking-widest text-neutral-900/40 lg:text-neutral-900/20 uppercase'> testimonials</h1>
      <Fade duration={2000}>
        <div className='w-screen max-h-[24rem] overflow-auto px-4 pt-20 pb-10 lg:px-12 lg:py-6 flex flex-col justify-center items-start bg-emerald-500/30 border-y-8 border-neutral-300'>
          <h2 className='text-lg lg:text-2xl lg:font-semibold'>{testimonials[currentIndex].quote}</h2>
          <h2 className='text-sm lg:text-lg text-black/80 tracking-wide font-semibold italic'>{testimonials[currentIndex].author}</h2>
        </div>
      </Fade>
    </div>
  )

}
export default TestimonialsOverlay