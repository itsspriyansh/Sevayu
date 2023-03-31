import React, { useEffect, useState } from 'react'
import DataCard from '../../Components/DataCard'
import DoctorContent from '../../Components/DoctorContent'
import ListItem from '../../Components/ListItem'
import { getDoctors } from '../../utils/api'
import { useUserState } from '../../store/store'

const Doctors = () => {
    const cardContent = ["Total Doctors", "Total Patients", "Average Patient per Doctor"]
    const color = ["#00FF29", "#FFA800", "#FF008A"]

    const [state, setState] = useState(null)
    const { hospitalData } = useUserState()
  
    useEffect(() => {
        (async () => {
            const data = await getDoctors("642295d48faa8f5df1096a01")
            console.log(data)
            // console.log(hospitalData._id)
        })()
    }, [])

    return (
      <div className='w-full'>
          <div className='w-full h-[15rem] py-5 justify-around sm:flex hidden'>
            {
              cardContent.map((text, idx) => <DataCard text={text} key={idx} />)
            }
          </div>
          <div className='w-full mt-24'>
              <p className='font-bold text-[1.8rem] visby ml-5 sm:mb-0 mb-5'>Doctors</p>
              <div className='w-full flex justify-center py-10'>
                <input className='w-10/12 h-12 rounded-3xl px-5 text-gray-500 focus:outline-none' placeholder='Search...'></input>
              </div>
            <ListItem><DoctorContent /></ListItem>
            <ListItem><DoctorContent /></ListItem>
            <ListItem><DoctorContent /></ListItem>
            <ListItem><DoctorContent /></ListItem>
            <ListItem><DoctorContent /></ListItem>
            <ListItem><DoctorContent /></ListItem>
            <ListItem><DoctorContent /></ListItem>
          </div>
      </div>
    )
}

export default Doctors

