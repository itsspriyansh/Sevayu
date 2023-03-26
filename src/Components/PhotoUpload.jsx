import React from 'react'

const PhotoUpload = ({ back }) => {

    const handleBackClick = e => {
        e.preventDefault()
        back()
    }

    const handleUpload = e => {
        console.log(e)
        console.log(e.target.value)
    }

  return (
    <>
      <input onChange={handleUpload} type="file" lable="upload image"></input>
      <button onClick={handleBackClick} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:left-[20%] left-[8%]'>Back</button>
      <button className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:right-[20%] right-[8%]'>Submit</button>
    </>
  )
}

export default PhotoUpload
