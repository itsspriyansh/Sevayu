import React from 'react'
import { useState } from 'react'

const DoctorContent = ({ item, hovering }) => {

  const { experience, Intime, Outtime, department, days, contact, name, speciality } = item

  let content = (<>
    <div className='sm:ml-[6%]'>
      <p>{`Department: ${department}`}</p>
      <p>{`Experience: ${experience}`}</p>
    </div>
    <div>
      <p>{`Available from ${Intime} to ${Outtime}`}</p>
      <p>{`Available on: Sun, Mon, Tue, Wed, Thr, Fri, Sat`}</p>
    </div>
  </>)

  return (
    <>
    <div className='flex flex-col justify-between h-full'>

    <ul className='flex flex-row justify-between visby text-[1rem] lg:text-[1.15rem] pr-[10px] transition-all ease-in-out'>
      <li className='sm:w-[35%]'>
        <div className='flex align-top'>
          <div className='sm:w-12 sm:h-12 w-8 h-8 inline-block bg-[#a7a7a7] sm:mr-8 mr-2 rounded-full'></div>
          <div className='inline-block'>
            <p>{name}</p>
            <p className='text-[0.9rem] text-[#949393]'>{contact}</p>
          </div>
        </div>
      </li>

      <li className='sm:w-[35%] flex sm:block text-center'>
        {speciality}
      </li>
    </ul>

      <div className='h-full mt-5 flex justify-between text-gray-500 visby text-[0.9rem]'>
        {hovering && content}
      </div>

    </div>
    </>
  )
}

export default DoctorContent
