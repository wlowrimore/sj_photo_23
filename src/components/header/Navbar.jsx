import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';

import './header.css';
import ContactModal from '../contact/contactModal/ContactModal';
import Contact from '../contact/Contact';

const Navbar = ({ setModalOpen }) => {
  const [color, setColor] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

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

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={
        color
          ? 'hidden md:flex headerNav headerNav-bg pt-[2rem]'
          : 'hidden md:flex headerNav pt-[2rem]'
      }>
        <nav className='lg:flex w-full h-[10rem] justify-between items-center pt-8 mx-4 lg:py-6 lg:px-20'>
          <a href='#home' onClick={handleClick}>
            <div className='uppercase'>
              <h1 className='text-3xl lg:text-5xl text-emerald-700'>Sayre Joan</h1>
              <h3 className='text-2xl lg:text-3xl text-neutral-50 opacity-50 tracking-wider lg:relative z-[-1] bottom-5 left-14'>Photography</h3>
            </div>
          </a>


          <div className='text-emerald-100 uppercase'>
            <ul className='hidden lg:flex space-x-8 cursor-pointer'>
              <ul onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>galleries
                {isHovering && (
                  <ul className='fixed z-20 p-2 text-sm tracking-wider bg-neutral-900/70 rounded-b-lg'>
                    <a href='#musicians-gallery' onClick={handleClick}><li className='py-2 btmbrdr'>musicians</li></a>
                    <a href='#publications-gallery' onClick={handleClick}><li className='py-2 btmbrdr'>publications</li></a>
                    <a href='#architecture-gallery' onClick={handleClick}><li className='py-2 btmbrdr'>architecture</li></a>
                  </ul>
                )}
              </ul>
              <a href='#services' onClick={handleClick}><li className="btmbrdr">services</li></a>
              <a href='#about' onClick={handleClick}><li className="btmbrdr">about</li></a>
              <a href='#contact'><li className="btmbrdr" onClick={openModal}>contact</li></a>
            </ul>
          </div>

        </nav>
      </header>

      {/* mobile */}

      <div className="md:hidden fixed z-10 w-screen bottom-0 bg-black">
        <nav className="flex justify-center items-center"></nav>
        <ul className="flex justify-center items-center py-2">
          <li className="px-2 text-sm text-center text-white">
            <a href='#home'>home</a>
          </li>

          <li className="px-2 text-sm text-center text-white">
            <a href='#gallery-choices'>galleries</a>
          </li>

          <li className="px-2 text-sm text-center text-white">
            <a href='#services'>services</a>
          </li>

          <li className="px-2 text-sm text-center text-white">
            <a href='#about'>about</a>
          </li>

          <li className="px-2 text-sm text-center text-white">
            <a href='#contact' onClick={openModal}>contact</a>
          </li>
        </ul>
      </div>

      <ContactModal isOpen={isModalOpen} openModal={openModal} onClose={closeModal}>
        <Contact />
      </ContactModal>
    </>
  )
}

export default Navbar