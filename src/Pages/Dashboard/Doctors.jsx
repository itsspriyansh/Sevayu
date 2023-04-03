import React, { useEffect, useState } from 'react'
import DataCard from '../../Components/DataCard'
import DoctorContent from '../../Components/DoctorContent'
import ListItem from '../../Components/ListItem'
import { getDoctors, registerDoctor } from '../../utils/api'
import { useDayList, useDoctors, useUserState } from '../../store/store'
import DoctorRegister from '../../Components/DoctorRegister'
import { nanoid } from 'nanoid'

const Doctors = () => {
  const cardContent = ["Total Doctors", "Total Patients", "Average Patient per Doctor"]
  const color = ["#FF008A", "#FF005A", "#FF008A"]
  
    const { hospitalData } = useUserState()
    const { doctors, setDoctors } = useDoctors()
    const { daysList } = useDayList()

    
    const [hovering, setHovering] = useState(false)
    const [backDrop, setBackDrop] = useState(false)
    const [payload, setPayload] = useState({
      id : nanoid(), 
      name :"", 
      experience :"", 
      speciality : "", 
      contact : "", 
      department : "",
      Intime : "",
      Outtime : "",
      days : []
    })
    

    const cardValues = [doctors.length, "48"]
    cardValues.push(parseInt(parseInt(cardValues[1]) / cardValues[0]))

    
    const handleChange = input => e => {
      setPayload(prev => ({...prev, [input] : e.target.value}))
    }
    
    const registerDoctorHandler = async () => {
      const doctorData = {
        hospitalid : hospitalData._id,
        Doctor : payload
      }
      const hospitalObj = await registerDoctor(doctorData)
      if (hospitalObj) {
        setDoctors(hospitalObj.doctors)
      }
    }

    useEffect(() => {
      setPayload(prev => ({...prev, days: daysList}))
    }, [daysList])
    
    useEffect(() => {
      (async () => {
        const res = await getDoctors(hospitalData._id)
        await setDoctors(res)
      })()
    }, [])
    

    const addDoctorHandler = () => {
      setBackDrop(prev => true)
    }

    if (!doctors) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <>
      <div className='w-full'>
          <div className='w-full h-[15rem] py-5 justify-around sm:flex hidden'>
            {
              cardContent.map((text, idx) => <DataCard value={cardValues[idx]} text={text} key={idx} />)
            }
          </div>
          <div className='w-full mt-24'>
            <div className='w-full flex justify-between'>

              <p className='font-bold text-[1.8rem] visby ml-5 sm:mb-0 mb-5 inline'>Doctors</p>
              <button 
                className=' inline ml-5 sm:bg-[#FF008A] text-[#FF008A] underline underline-offset-2 sm:no-underline sm:text-white px-3 rounded-lg sm:font-bold visby'
                onClick={addDoctorHandler}>
                  Add Doctor
              </button>
            </div>
              <div className='w-full flex justify-center py-10'>
                <input className='w-10/12 h-12 rounded-3xl px-5 text-gray-500 focus:outline-none' placeholder='Search...'></input>
              </div>
            {
              doctors.map((item, idx) => <DoctorContent setHovering={setHovering} hovering={hovering} item={item} idx={idx} key={idx} />)
            }
          </div>
      </div>

      {backDrop && (<DoctorRegister 
          setBackDrop={setBackDrop} 
          handleChange={handleChange} 
          registerDoctorHandler={registerDoctorHandler} />)}
      </>
    )
}

export default Doctors
