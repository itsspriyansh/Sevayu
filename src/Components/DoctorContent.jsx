import React from 'react'
import { useState } from 'react'

const DoctorContent = ({ item }) => {

  const { experience, Intime, Outtime, department, days, contact, name, speciality } = item

  const [hovering, setHovering] = useState(false)

  const hoverHandler = () => setHovering(prev => true)
  const leaveHandler = () => setHovering(prev => false)

  const week = ["Sun" ,"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let daysArray = []

  week.forEach(day => {
    if (days.includes(day)) {
      daysArray.push(day)
    }
  })

  let dayString = daysArray.join(", ")

  let content = (<>
    <div className='sm:ml-[6%]'>
      <p>{`Department: ${department}`}</p>
      <p>{`Experience: ${experience}`}</p>
    </div>
    <div>
      <p>{`Available from ${Intime} to ${Outtime}`}</p>
      <p>{`Available on: ${dayString}`}</p>
    </div>
  </>)

  return (
    <>
    <div onMouseOver={hoverHandler} onMouseLeave={leaveHandler} className='w-full bg-white sm:h-[5rem] sm:hover:h-[8rem] hover:h-[11rem] rounded-lg relative overflow-hidden px-5 py-3 sm:pt-3 transition-all ease-in-out my-2'>
    <div className="absolute w-2 top-0 bottom-0 left-0 bg-pink-500" />

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

        <div className='h-full mt-5 block sm:flex justify-between text-gray-500 visby text-[0.9rem]'>
          {hovering && content}
        </div>
      </div>

    </div>
    </>
  )
}

export default DoctorContent
