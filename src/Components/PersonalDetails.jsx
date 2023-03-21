import { TextField } from '@mui/material'
import React from 'react'

const PersonalDetails = ({ next, back, handleChange }) => {

  const handleBack = e => {
    e.preventDefault()
    back()
  }

  return (
    <>
    <div className='flex flex-col'>
        <div>
        <TextField id="standard-basic" label="City / Town" variant="standard" className='w-9/12' />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" label="State" variant="standard" className='w-9/12' />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" label="Country" variant="standard" className='w-9/12' />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" label="Postal code" variant="standard" className='w-9/12' />
        </div>
    </div>

    <div className='flex justify-center gap-12 mt-8'>
        <TextField id="standard-basic" type="input" label="Sex" variant="standard" className='w-3/12' />
        <div className='w-[11rem] flex justify-between text-gray-500 mt-4'>
            <p className='mt-2'>DOB</p>
            <TextField id="standard-basic" type="date" variant="standard" className='w-8/12' />
        </div>
    </div>
      <button onClick={handleBack} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] left-[20%]'>Back</button>
      <button className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] right-[20%]'>Submit</button>
    </>
  )
}

export default PersonalDetails
