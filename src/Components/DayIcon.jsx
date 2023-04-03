import React from 'react'
import { useState } from 'react'

const DayIcon = ({ day }) => {

    const [active, setActive] = useState(false)

    const inactiveCss = "flex items-center justify-center rounded-full w-8 h-8 bg-gray-200"
    const activeCss = "flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white"

  return (
    <div className={active ? activeCss : inactiveCss}>{day}</div>
  )
}

export default DayIcon
