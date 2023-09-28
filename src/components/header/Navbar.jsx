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
        <nav className='flex w-full justify-between items-center py-6 px-20'>
          <a href='#home' onClick={handleClick}>
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
      <ContactModal isOpen={isModalOpen} openModal={openModal} onClose={closeModal}>
        <Contact />
      </ContactModal>
    </>
  )
}

export default Navbar