import React, { useState } from 'react'
import TextArea from './TextArea'
import AboutText from './AboutText'
import { useDispatch, useSelector } from 'react-redux'
import { updateCreateEventField } from '../../../pages/create event/CreateEventSlice'

const AboutEvent = () => {

    const formData = useSelector(state=> state.createEvent)
    const dispatch= useDispatch();
    
  const updateAboutClicked = () => {

    const fieldValue= {
      field: 'isAboutClicked',
      value: true
    }
    dispatch(updateCreateEventField(fieldValue))
  };



  return (
    <div className="px-4 border rounded cursor mt-3" onClick={updateAboutClicked}>
        <h2 className='mt-3'>About Event</h2>

        <AboutText/>
        {!formData.isAboutClicked? null
        :<TextArea/>
    }
    </div>
  )
}

export default AboutEvent