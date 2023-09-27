import { useState, useEffect } from 'react'

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
    <div className='w-screen h-[15rem] bg-overlay2 bg-no-repeat bg-start bg-cover flex items-center'>
      <h1 className='text-9xl pl-20 font-bold absolute tracking-widest text-neutral-900/20 uppercase'> testimonials</h1>
      <div className='w-screen h-full px-12 py-6 flex flex-col justify-center items-start bg-emerald-500/30 border-y-8 border-neutral-300'>
        <h2 className='text-2xl font-semibold'>{testimonials[currentIndex].quote}</h2>
        <h2 className='text-lg text-black/80 tracking-wide font-semibold italic'>{testimonials[currentIndex].author}</h2>
      </div>

    </div>
  )

}
export default TestimonialsOverlay