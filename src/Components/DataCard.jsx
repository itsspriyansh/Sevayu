import React from 'react'

const DataCard = ({ text, value }) => {
  return (
    <div className='w-[30%] h-full bg-white rounded-xl flex flex-col items-center justify-center gap-7'>
        <p className='text-7xl akshar font-light'>{value}</p>
        <center className='text-[#A7A7A7] px-2'>
          {text}
        </center>
    </div>
  )
}

export default DataCard
