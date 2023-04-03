import React from 'react'
import { TextField } from '@mui/material'
import DayIcon from './DayIcon'

const DoctorRegister = ({ setBackDrop, handleChange, registerDoctorHandler }) => {

    const removeBackDrop = () => {
        setBackDrop(prev => false)
    }

    const submitHandler = () => {
        registerDoctorHandler()
        setBackDrop(prev => false)
    }

    const days = [['S', 'Sun'], ['M', 'Mon'], ['T', 'Tue'], ['W', 'Wed'], ['T', 'Thu'], ['F', 'Fri'], ['S', 'Sat']]

  return (
    <>
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-10' />

    <div className='absolute z-20 top-0 bottom-0 right-0 left-0 flex justify-center'>
      <div className='bg-white w-[35rem] h-[44rem] sticky top-[3rem] sm:top-[10rem] rounded-2xl mx-5 z-30 animate__animated animate__fadeInLeft'>
        <p className='absolute left-6 sm:left-20 top-10 font-bold text-[1.3rem]'>Add Doctor</p>
            <button
              className='absolute right-8 top-5 underline' 
              onClick={removeBackDrop}>cancel</button>
        <div className='flex flex-col gap-3 px-5 sm:px-20 pt-20'>
            
          <TextField
            onChange={handleChange("name")}
            id="standard-basic" 
            label="Name" />
          <TextField
            onChange={handleChange("contact")}
            id="standard-basic" 
            label="Contact" />
          <TextField
            onChange={handleChange("speciality")}
            id="standard-basic" 
            label="Specialization" />
          <TextField
            onChange={handleChange("department")}
            id="standard-basic" 
            label="Department" />
          <TextField
            onChange={handleChange("experience")}
            id="standard-basic" 
            label="Experience" />

          <div className='flex justify-between w-full'>
            <div className='w-[40%]'>
              <p className='w-full text-gray-500'>In Time</p>
              <input type='time' className='w-full' onChange={handleChange("Intime")}></input>
            </div>
            <div className='w-[40%]'>
              <p className='w-full text-gray-500'>Out Time</p>
              <input type='time' className='w-full' onChange={handleChange("Outtime")}></input>
            </div>
          </div>

          <p className='text-gray-500'>Available on: </p>
          <div className='flex w-[17rem] justify-between' id='days'>
            {days.map(day => <DayIcon initial={day[0]} day={day[1]} key={day[1]} />)}
          </div>

        </div>
        <button 
            className="absolute bottom-14 right-[5%] sm:right-[15%] bg-[#FF008A] px-5 py-2 rounded-lg text-white visby font-medium"
            onClick={submitHandler}> Submit </button>
      </div>
    </div>
    </>
  )
}

export default DoctorRegister

