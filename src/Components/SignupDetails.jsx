import { TextField } from '@mui/material'
import React from 'react'

const SignupDetails = ({ next, handleChange, state }) => {

  const handleNext = e => {
    e.preventDefault()
    next()
  }

  return (
    <>
        <TextField 
          id="standard-basic" 
          label="Username" 
          variant="standard" 
          className='w-9/12' 
          onChange={handleChange("userName")} 
          defaultValue={state.userName}
        />
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Full Name"
          variant="standard" 
          className='w-9/12' 
          onChange={handleChange("fullName")} 
          defaultValue={state.fullName}
        />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Email" 
          variant="standard" 
          type="email" 
          className='w-9/12'
          onChange={handleChange("email")} 
          defaultValue={state.email}
        />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
          type="password" 
          className='w-9/12'
          onChange={handleChange("password")} 
          defaultValue={state.password}
        />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Confirm Password"
          variant="standard" 
          type="password" 
          className='w-9/12'
          onChange={handleChange("confirmPassword")} 
          defaultValue={state.confirmPassword}
        />
        </div>
        <button onClick={handleNext} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] right-[40%]'>Next</button>
    </>
  )
}

export default SignupDetails

