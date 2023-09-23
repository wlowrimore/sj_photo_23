import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-transparent text-white fixed top-0 w-full max-h-[5rem]'>
      <nav className='flex justify-between items-center py-6 px-20'>
        <div className='uppercase'>
          <h1 className='text-5xl text-emerald-700 tracing-widest'>Sayre Joan</h1>
          <h3 className='text-3xl text-emerald-100 opacity-70 tracking-wider relative z-[-1] bottom-6 left-14'>Photography</h3>
        </div>
        <div>
          <ul className='flex space-x-6'>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar