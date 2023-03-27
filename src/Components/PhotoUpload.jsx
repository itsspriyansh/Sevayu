import { Navigate } from 'react-router-dom'
import { useUserState } from '../store/store'
import { register } from '../utils/api'

const PhotoUpload = ({ back, state }) => {

    const { isLoggedIn, setIsLoggedIn } = useUserState()

    const handleBackClick = e => {
        e.preventDefault()
        back()
    }

    const handleUpload = e => {
        console.log(e)
        console.log(e.target.value)
    }

    const submitHandler = async () => {
      const data = {
        name : state.fullName,
        email : state.email, 
        password : state.password, 
        postalcode : state.postalCode, 
        contact : state.contact, 
        country : state.country,
        street : state.street, 
        city : state.city, 
        state : state.state,
        images : [{id : "1", url : "imsdf"}]
      }
      const token = await register(data)
      localStorage.setItem("jwt", token)
      setIsLoggedIn()
    }


  return (
    <>
      <input onChange={handleUpload} type="file" lable="upload image"></input>
      <button onClick={handleBackClick} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:left-[20%] left-[8%]'>Back</button>
      <button onClick={submitHandler} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:right-[20%] right-[8%]'>Submit</button>
      {isLoggedIn && <Navigate to="../" />}
    </>
  )
}

export default PhotoUpload

