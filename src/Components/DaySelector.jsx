import DayIcon from './DayIcon'

const DaySelector = () => {

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  return (
    <>
    <p className='text-gray-500'>Available on: </p>
    <div className='flex w-[17rem] justify-between' id='days'>
        {days.map(day => <DayIcon day={day} />)}
    </div>
    </>
  )
}

export default DaySelector