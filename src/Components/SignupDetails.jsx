import { TextField } from '@mui/material'
import React from 'react'

const SignupDetails = ({ next, handleChange }) => {

  const handleNext = e => {
    e.preventDefault()
    next()
  }

  return (
    <>
        <TextField id="standard-basic" label="Username" variant="standard" className='w-9/12' />
        <div className='mt-[2.5rem]'>
        <TextField id="standard-basic" label="Full Name" variant="standard" className='w-9/12' />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField id="standard-basic" label="Email" variant="standard" type="email" className='w-9/12' />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField id="standard-basic" label="Password" variant="standard" type="password" className='w-9/12' />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password" className='w-9/12' />
        </div>
        <button onClick={handleNext} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] right-[40%]'>Next</button>
    </>
  )
}

export default SignupDetails

