import { TextField } from '@mui/material'
import React from 'react'

const PersonalDetails = ({ next, back, handleChange, state }) => {

  const handleBack = e => {
    e.preventDefault()
    back()
  }

  const handleNext = e => {
    e.preventDefault()
    next()
  }

  return (
    <>
    <div className='flex flex-col'>
        <div>
        <TextField id="standard-basic" defaultValue={state.city} label="City / Town" variant="standard" className='sm:w-9/12 w-full' onChange={handleChange("city")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" defaultValue={state.state} label="State" variant="standard" className='sm:w-9/12 w-full' onChange={handleChange("state")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" defaultValue={state.country} label="Country" variant="standard" className='sm:w-9/12 w-full' onChange={handleChange("country")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" defaultValue={state.postalCode} label="Postal code" variant="standard" className='sm:w-9/12 w-full' onChange={handleChange("postalCode")} />
        </div>
    </div>

    <div className='flex justify-center gap-12 mt-8'>
        <TextField id="standard-basic" defaultValue={state.sex} type="input" label="Sex" variant="standard" className='w-3/12' onChange={handleChange("sex")} />
        <div className='w-[11rem] flex justify-between text-gray-500 mt-4'>
            <p className='mt-2' onChange={e => console.log(e.target.value)} >DOB</p>
            <TextField id="standard-basic" type="date" variant="standard" className='w-8/12' />
        </div>
    </div>
      <button onClick={handleBack} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:left-[20%] left-[8%]'>Back</button>
      <button onClick={handleNext} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:right-[20%] right-[8%]'>Next</button>
    </>
  )
}

export default PersonalDetails

