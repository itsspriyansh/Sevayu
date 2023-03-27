import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Appointments from './Dashboard/Appointments'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {

  const { pathname } = useLocation()
  let content
  if (pathname == "/") content = <Appointments />

  return (
    <div>
        <Header />
        <div className='flex h-full'>
            <div className='bg-white w-[25%] max-w-[20rem] hidden md:block pt-24 px-12'>
                <Sidebar />
            </div>
            <div className='bg-[#EAF1F6] min-h-[90vh] md:w-[80%] lg:w-[70%] w-full px-4'>
              {content}
            </div>
            <div className='bg-[#EAF1F6] w-[20%] hidden lg:block'>
              <div className='w-[90%] py-5 px-5 xl:px-10 bg-white mt-5 rounded-xl visby'>
                <center>Primary Health Center IIITDM Jabalpur</center>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

