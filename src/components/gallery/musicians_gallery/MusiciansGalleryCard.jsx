import { useState } from 'react'
import musicians from "../../../musicans.json";

const MusiciansGalleryCard = () => {
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
        <div className='grid grid-cols-3 justify-center items-center mx-auto gap-y-6 gap-x-20'>
          {musicians.map((musician, index) => (
            <div className='w-[30rem] h-[10rem] flex py-2 px-6 text-3xl tracking-widest text-emerald-700 bg-neutral-950 rounded border-4 border-emerald-700 shadow-lg shadow-neutral-700 cursor-pointer transform trasition hover:opacity-80 hover:scale-110 duration-500' onClick={() => openModal(musician.image)}>

              <img key={index} src={musician.image} alt={musician.name} className='w-36 p-4 aspect-square rounded-[50%]' />

              <h1 className='w-full text-end my-auto pr-4'>{musician.name}</h1>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className='w-screen h-screen fixed top-0 left-0 bg-black/40 flex flex-col justify-center items-center px-auto backdrop-blur-md'>
            <span className='text-5xl text-white relative left-96 cursor-pointer transform transition hover:text-neutral-500 duration-500' onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected Image" className='w-[50rem]' />
          </div>
        )}
      </main>
    </>
  )
}

export default MusiciansGalleryCard