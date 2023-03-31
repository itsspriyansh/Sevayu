import React from 'react'

const DoctorContent = () => {
  return (
    <>
    <ul className='h-full flex flex-row justify-between visby text-[1rem] lg:text-[1.15rem] pr-[10px] transition-all ease-in-out'>

    <li className='sm:w-[35%]'>
      <div className='flex align-top'>
        <div className='sm:w-12 sm:h-12 w-8 h-8 inline-block bg-[#a7a7a7] sm:mr-8 mr-2 rounded-full'></div>
        <div className='inline-block'>
          <p>Pranjal Jha</p>
          <p className='text-[0.9rem] text-[#949393]'>+91 9483720480</p>
        </div>
      </div>
    </li>

    <li className='sm:w-[35%] flex sm:block text-center'>
      Urologist
    </li>

  </ul>
    </>
  )
}

export default DoctorContent
