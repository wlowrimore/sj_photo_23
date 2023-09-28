import { useState } from 'react'
import { Fade } from 'react-awesome-reveal';

import architecture from "../../../architecture.json";

const ArchitectureGalleryCard = () => {
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
      <main className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 justify-center items-center mx-auto gap-y-6 gap-x-20'>
          {architecture.map((item, index) => (
            <div key={item.id} className='lg:w-[14rem] lg:h-[14rem] flex flex-col border border-black p-2 rounded text-xl font-semibold tracking-wide bg-white/10 cursor-pointer transform trasition hover:opacity-80 hover:scale-110 duration-500' onClick={() => openModal(item.image)}>

              <img key={index} src={item.image} alt="" className='w-full aspect-square' />

            </div>
          ))}
          <p className='lg:hidden text-xs text-center'>&copy; William Lowrimore 2023. All Rights Reserved.</p>

        </div>
        {modalOpen && (
          <div className='w-screen h-screen fixed top-0 left-0 z-80 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center px-auto' onClick={closeModal}>
            <Fade duration={1000} triggerOnce="true">
              <img src={selectedImage} alt="Selected" className='w-[50rem] border-2 border-emerald-200 rounded shadow-md shadow-black' />
            </Fade>
          </div>
        )}
      </main>
    </>
  )
}

export default ArchitectureGalleryCard