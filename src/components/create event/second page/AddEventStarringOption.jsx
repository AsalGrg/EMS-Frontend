import React from 'react'
import { useDispatch } from 'react-redux'
import { addStarringInput } from '../../../pages/create event/CreateEventSlice';

const AddEventStarringOption = () => {

  const dispatch = useDispatch();

  const addStarring =()=>{
    dispatch(
      addStarringInput()
    );
  }
  return (
    <div className='d-flex col-5 border justify-content-center align-items-center'>
      <p
      onClick={addStarring}
      >Add Starring</p>
    </div>
  )
}

export default AddEventStarringOption