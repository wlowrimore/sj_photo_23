import { useState } from 'react'

const Gallery = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className='min-h-screen bg-neutral-800 flex flex-col justify-center items-center mx-auto'>
      <section className='lg:border border-emerald-700 py-8 lg:p-16 rounded'>
        <h1 className='uppercase text-lg lg:text-2xl pt-20 pb-4 lg:pb-16 text-gray-400 tracking-wider'>Choose your gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-40'>
          <a href='#musicians-gallery' onClick={handleClick}>
            <div className='flex flex-col items-center border border-emerald-700 rounded pt-6 px-6 transform
                                transition duration-500 hover:scale-95 hover:opacity-60 cursor-pointer'>
              <h3 className='signature text-4xl tracking-widest text-emerald-700'>Musicians</h3>
              <div className='py-8'>
                <img src='./images/icons/musicians.svg' alt='microphone icon' width={500} height={500} className='w-16 opacity-60' />
              </div>
            </div>
          </a>
          <a href='#publications-gallery' onClick={handleClick}>
            <div className='flex flex-col items-center border border-emerald-700 rounded pt-6 px-6 transform
                                transition duration-500 hover:scale-95 hover:opacity-60 cursor-pointer'>
              <h3 className='signature text-4xl tracking-widest text-emerald-700'>Publications</h3>
              <div className='py-8'>
                <img src='./images/icons/publications.svg' alt='book icon' width={500} height={500} className='w-44 opacity-60' />
              </div>
            </div>
          </a>
          <a href='#architecture-gallery' onClick={handleClick}>
            <div className='flex flex-col items-center border border-emerald-700 rounded pt-6 px-6 transform
                                transition duration-500 hover:scale-95 hover:opacity-60 cursor-pointer'>
              <h3 className='signature text-4xl tracking-widest text-emerald-700'>Architecture</h3>
              <div className='py-8'>
                <img src='./images/icons/architecture.svg' alt='buildings icon' width={500} height={500} className='w-32 opacity-60' />
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Gallery