import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <ul className='flex flex-col items-start justify justify-center gap-12 visby'>
            <li>Appointments</li>
            <li>Medical Tests</li>
            <li>Doctors</li>
            <li>Add Appointment</li>
            <li>Blood Bank</li>
        </ul>
    </div>
  )
}

export default Sidebar
