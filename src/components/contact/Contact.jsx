import { useEffect, useState } from 'react'

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false)

  const submitEmail = (e) => {
    e.preventDefault();
    setFullName(fullName);
    setEmail(email);
    setPhone(phone);
    setMessage(message);
    setSuccess(true)
  }

  return (
    <form
      className="bg-neutral-800 lg:w-full flex flex-col items-center justify-center lg:px-20 pb-20 mx-auto"
      id="form">
      <div className='w-full py-4 lg:py-20 flex justify-center text-emerald-200'>
        <h1 className='text-3xl lg:text-4xl opacity-40 pt-12 signature'>SayreJoan Photography</h1>
      </div>
      <div className='flex flex-col w-full px-4 py-4'>
        <input type='text' name='full_name' onChange={(e) => setFullName(e.target.value)} className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-1" required />
        <label htmlFor='full-name' className='text-emerald-200 px-2 text-start'>full name</label>
      </div>
      <div className='flex flex-col w-full px-4 py-4'>
        <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-1" required />
        <label htmlFor='email' className='text-emerald-200 px-2 text-start'>email</label>
      </div>
      <div className='flex flex-col w-full px-4 py-4'>
        <input type='tel' name='phone' onChange={(e) => setPhone(e.target.value)} className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-1" />
        <label htmlFor='phone' className='text-emerald-200 px-2 text-start'>phone number (optional)</label>
      </div>
      <div className="flex flex-col w-full py-2">
        <textarea
          className="bg-black bg-opacity-10 border-b border-white rounded-sm px-1 py-1 placeholder-white placeholder:text-center placeholder:fixed placeholder:bottom-0 text-white font-thin tracking-wide outline-none"
          name="message"
          required
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          id="message"
          cols="30"
          rows="8"
        ></textarea>
        <label htmlFor="message" className="text-emerald-200 w-full px-6 lg:px-2 text-start">
          message
        </label>
      </div>
      <div onClick={submitEmail} className='flex justify-center items-center text-3xl cursor-pointer mt-12 p-4 text-emerald-700 signature transition hover:text-emerald-200 duration-700'>
        Send&nbsp;<img src='./images/icons/sendIcon.svg' alt='send icon' className='w-10' />&nbsp;Message
      </div>
      {success && (
        <div className='bg-teal-500/90 font-semibold rounded-xl text-2xl text-semibold flex justify-center items-center mx-auto fixed top-5 z-50 py-2 px-4'>
          <h3>Thank you <em>{fullName}</em>, your message was successfully sent!</h3>
        </div>
      )}
    </form>
  )
}

export default Contact