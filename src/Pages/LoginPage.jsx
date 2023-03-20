import React from 'react'
import Navbar from '../Components/Navbar'
import { TextField } from '@mui/material'

const LoginPage = () => {

  return (
    <div>
        <Navbar />
        <center>
            <div id='loginbox' className='bg-white sm:w-[35rem] w-[25rem] h-[35rem] mt-[5rem] rounded-3xl shadow-black drop-shadow-2xl transition-all ease-in-out animate__animated animate__fadeInLeft'>
                <p className='absolute left-[10%] top-[5%] text-3xl font-bold visby'>Login</p>
                <div className='w-[80%] h-[1px] bg-[#e3e3e3] top-[15%] left-[10%] absolute' />
                <div className='w-[80%] h-[80%] absolute left-[10%] top-[25%]'>
                    <TextField id="standard-basic" label="Username" variant="standard" className='w-9/12' />
                    <div className='mt-[2.5rem]'>
                    <TextField id="standard-basic" label="Password" variant="standard" type="password" className='w-9/12' />
                    <button className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button'>Login</button>
                    </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default LoginPage