import { useState } from 'react'
import { Fade } from 'react-awesome-reveal';

import publications from "../../../publications.json";

const PublicationsGalleryCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  }

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  }

  return (
    <>
      <main>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 justify-center items-center mx-auto gap-y-6 gap-x-20'>
          {publications.map((publication, index) => (
            <div key={publication.id} className='md:w-[14rem] md:h-[18rem] flex flex-col border border-black p-2 rounded text-xl font-semibold tracking-wide bg-white/10 cursor-pointer transform trasition hover:opacity-80 hover:scale-110 duration-500' onClick={() => openModal(publication.image)}>

              <img key={index} src={publication.image} alt={publication.name} className='w-full aspect-square' />

              <h1 className='w-full text-emerald-200 font-light text-center my-auto px-4'>{publication.name}</h1>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className='w-screen h-screen fixed top-0 left-0 z-10 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center px-auto'>
            <Fade duration={1000} triggerOnce="true">
              <span className='text-5xl text-white relative left-96 cursor-pointer transform transition hover:text-neutral-500 duration-500' onClick={closeModal}>&times;</span>
              <img src={selectedImage} alt="Selected" className='w-[50rem] border-2 border-emerald-200 rounded shadow-md shadow-black' />
            </Fade>
          </div>
        )}
      </main>
    </>
  )
}

export default PublicationsGalleryCard