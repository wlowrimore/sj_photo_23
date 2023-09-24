import { useState } from 'react'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <header className='bg-transparent text-white fixed top-0 w-full max-h-[5rem]'>
      <nav className='flex justify-between items-center py-6 px-20'>
        <div className='uppercase'>
          <h1 className='text-5xl text-emerald-700 tracing-widest'>Sayre Joan</h1>
          <h3 className='text-3xl text-neutral-50 opacity-50 tracking-wider relative z-[-1] bottom-5 left-14'>Photography</h3>
        </div>
        {toggleNav && (
          <div>
            <ul className='flex space-x-8 tracking-wider uppercase cursor-pointer'>
              <ul onMouseOver={handleMouseOver}>
                <li className='hover:text-gray-300'>musicians</li>
                {isHovering && (
                  <ul onMouseOut={handleMouseOut} className='fixed flex text-sm mt-4 space-x-4 z-20'>
                    <li className='hover:text-emerald-500 py-3'>lead vocals</li>
                    <li className='hover:text-emerald-500 py-3'>strings</li>
                    <li className='hover:text-emerald-500 py-3'>drums & percussion</li>
                  </ul>
                )}
              </ul>
              <li className='hover:text-gray-300'>Publications</li>
              <li className='hover:text-gray-300'>Architecture</li>
            </ul>
          </div>
        )}
        <div>
          <h2 onClick={() => setToggleNav(!toggleNav)} className='uppercase tracking-wider cursor-pointer hover:text-gray-300'>menu</h2>
        </div>

      </nav>
    </header>
  )
}

export default Navbar