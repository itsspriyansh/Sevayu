import React from 'react'
import Header from '../Components/Header'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='flex h-full'>
            <div className='bg-black h-[100vh] w-[20%] hidden md:block'></div>
            <div className='bg-green-200 h-[100vh] md:w-[60%] w-full'></div>
            <div className='bg-blue-500 h-[100vh] w-[20%] hidden lg:block'></div>
        </div>
    </div>
  )
}

export default Dashboard
