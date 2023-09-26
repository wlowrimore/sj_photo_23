import { useEffect, useState } from 'react'

import './header.css';

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const changeHeaderColor = () => {
      if (window.scrollY >= 80) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeHeaderColor);
  }, [])

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <header className={
      color
        ? 'hidden md:flex headerNav headerNav-bg pt-[2rem]'
        : 'hidden md:flex headerNav pt-[2rem]'
    }>
      <nav className='flex w-full justify-between items-center py-6 px-20'>
        <a href='/'>
          <div className='uppercase'>
            <h1 className='text-5xl text-emerald-700 tracing-widest'>Sayre Joan</h1>
            <h3 className='text-3xl text-neutral-50 opacity-50 tracking-wider relative z-[-1] bottom-5 left-14'>Photography</h3>
          </div>
        </a>

        <div className='text-emerald-100 uppercase'>
          <ul className='flex space-x-8 cursor-pointer'>
            <ul onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>galleries
              {isHovering && (
                <ul className='fixed z-20 p-2 text-sm tracking-wider bg-neutral-900/70 rounded-b-lg'>
                  <a href='#musicians-gallery'><li className='py-2'>musicians</li></a>
                  <a href='#publications-gallery'><li className='py-2'>publications</li></a>
                  <a href='#architecture-gallery'><li className='py-2'>architecture</li></a>
                </ul>
              )}
            </ul>
            <a href='#about'><li>about</li></a>
            <a href='#contact'><li>contact</li></a>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Navbar