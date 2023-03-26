import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Appointments from './Dashboard/Appointments'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='flex h-full'>
            <div className='bg-white w-[25%] max-w-[20rem] hidden md:block pt-24 px-12'>
                <Sidebar />
            </div>
            <div className='bg-[#EAF1F6] md:w-[80%] lg:w-[70%] w-full px-4'>
              <Appointments />
            </div>
            <div className='bg-[#EAF1F6] w-[20%] hidden lg:block'></div>
        </div>
    </div>
  )
}

export default Dashboard
